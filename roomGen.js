var furnitureDescriptors = [];  //furniture Objects
var elementDescriptors = [];   //in room Objects
var backgrounds = [];//Files containing background images
var rooms = [];      //Room objects


/**FIXME Possible problem, using i in a bunch of places that *may* be nested. Just a heads up for tomorrowUs**/
function randomBackground(){
   var bgNum = Math.floor(Math.random()*backgrounds.length);
   return backgrounds[bgNum];
}

/**Helper**/
function pick(arg, def) {
   return (typeof arg == 'undefined' ? def : arg);
}


/**Descriptor for items free standing items**/
/**yOffset is used for rugs & Paintings, to indicate something doesn't go against the wall. 0 is normal, -1 is down (rug), 1 is up (painting)**/
function RoomFurnitureDescriptor(itemWidth,itemHeight,yOffset,description, imagefile, probability, holds){
   this.description = description; // Name
   this.imagefile = imagefile; //Path to image
   this.probability = probability; //0 to 1
   this.holds = pick(holds,0);
   this.width = 100;
   this.height = 50;
   this.yOffset = yOffset;
   
   
}

/**Descriptor for items requiring tables/desks**/
function RoomElementDescriptor(itemWidth,itemHeight,description, imagefile, probability){
   this.description = description; // Name
   this.imagefile = imagefile; //Path to image
   this.probability = probability; //0 to 1
   this.width = 10;
   this.height = 20;
}

function RoomFurniture(item){
   this.furnitureDescriptor = item;
   this.attachedElements = 0;
   this.maxElements = item.holds;
   this.elements = [];
   this.craftEntity = null;
   /**Room index is the rooms index, pxOffset is the number of pixels from the start of the rooms to start drawing at**/
   this.draw = function(roomIndex, pxOffset){ 
      //alert("Drawing some furniture");
      //alert(pick(this.furnitureDescriptor.imagefile,"NOPE"));
      this.craftyEntity = Crafty.e("2D, DOM, Image")
         .attr({
            x: roomIndex * length_of_rooms + pxOffset, 
            y: worldHeight - this.furnitureDescriptor.height, 
            w: this.furnitureDescriptor.width, 
            h: this.furnitureDescriptor.height})
         .image(this.furnitureDescriptor.imagefile);
      if(this.attachedElements == 1){
         /**Pass centerX, and bottom y for the element to draw at**/
         this.elements[0].draw(this.index * length_of_rooms + pxOffset + this.furnitureDescriptor.width/2, worldHeight - this.furnitureDescriptor.height);
      }else if(this.attachedElements == 2){
         this.elements[0].draw(this.index * length_of_rooms + pxOffset + this.furnitureDescriptor.width/4, worldHeight - this.furnitureDescriptor.height);
         this.elements[1].draw(this.index * length_of_rooms + pxOffset + 3*this.furnitureDescriptor.width/4, worldHeight - this.furnitureDescriptor.height);
      } //Else, nothjing attached. Is one, or two.
      return this.furnitureDescriptor.width + pxOffset;
   }
      

}

function RoomElement(item){
   this.elementDescriptor = item;
   this.craftEntity = null;
   /**Room index is the rooms index, pxOffset is the number of pixels from the start of the rooms to start drawing at**/
   this.draw = function(xCenter,yBottom){ 
      this.craftyEntity = Crafty.e("2D, DOM, Image")
         .attr({
            x: xCenter - this.elementDescriptor.width/2, 
            y: worldHeight - this.elementDescriptor.height, 
            w: this.elementDescriptor.width, 
            h: this.elementDescriptor.height})
         .image(this.elementDescriptor.imagefile);
   }
}

function Room(index){
   this.index = index;
   this.background = randomBackground();
   this.furniture = [];
   this.elements = [];
   this.spareElementPlaces = 0;
   this.craftyEntity = null; //Probably should hold on to this. Maybe destruct wehn the room leaves our view?
   this.draw = function(){
      //Draw background
      this.craftyEntity = Crafty.e("2D, DOM, Image")
         .attr({x: this.index * length_of_rooms, y: 0, w: length_of_rooms, h: height})
         .image(this.background)
      var furniturePos = 0;
      for(i = 0; i <  this.furniture.length; i++){
         furniturePos+= this.furniture[i].draw(this.index,furniturePos); //move the position to draw furniture by this amount
      }
   }
}

/**Need to make all rooms at once, to guarentee that special items will exist someone**/
function GenRooms(){
   var i,j,k;
   console.log("Genrooms called");
   
   //Prepare Backgrounds, furniture
   setUpBackgrounds();
   setUpItems();
   
   
   //Create a bunch of rooms. number of rooms to create defined in setting.js
   for(i = 0; i < number_of_rooms; i++){
      rooms[i] = new Room(i);
   }
   
   //Pick which room gets the special items. These are marked with '-1' as the probability
   //furniture
   for(i = 0; i < furnitureDescriptors.length ; i++){
      if(furnitureDescriptors[i].probability < 0){
         var roomNum = Math.floor(Math.random() * number_of_rooms);
         rooms[roomNum].furniture.push(new RoomFurniture(furnitureDescriptors[i]));
      }
   }
   
   //elements
   for(i = 0; i < elementDescriptors.length ; i++){
      if(elementDescriptors[i].probability < 0){
         var roomNum = Math.floor(Math.random() * number_of_rooms);
         rooms[roomNum].elements.push(new RoomElement(elementDescriptors[i]));
         rooms[roomNum].spareElementPlaces--; //one less space an a desk, etc to sit.
      }
   }
   
   //Place normal furniture
   for(i = 0; i < number_of_rooms; i++){
      for(j = 0; j < furnitureDescriptors.length ; j++){
         if(furnitureDescriptors[j].probability > Math.random()){
            rooms[i].furniture.push(new RoomFurniture(furnitureDescriptors[j]));
            rooms[i].spareElementPlaces+=furnitureDescriptors[j].holds;
         }
      }
   
      //Should use permututations to walk through the elements array, so we dont' bias toward elements first in the list if we run out of spaces
      for(j = 0; j < elementDescriptors.length ; j++){
         if(elementDescriptors[j].probability > Math.random() && rooms[i].spareElementPlaces > 0){
            rooms[i].elements.push(new RoomElement(elementDescriptors[j]));
            rooms[i].spareElementPlaces--;
         }
      }
   
      //Now, we need to check there are enough tables to put everything on to. Check if any room has -1 spare sapces. If so, add somethign with >0 spaces.
      //FIXME, Should really use permutated list here too...
      //Should use permututations to walk through the furniture array, so we dont' bias toward furniture first in the list
      if(rooms[i].spareElementPlaces<0){
         for(j = 0; j < rooms[i].elements.length ; j++){
            if(furnitureDescriptors[j].holds > 0){
               rooms[i].furniture.push(new RoomFurniture(furnitureDescriptors[j]));
            }
         }
      }
   
      //Should now attach elements to suitable furniture. Note that Elements are NOT given positions byt the room, but, instead by the furniture they sit upon.
      
      
      for(j = 0; j < rooms[i].elements.length ; j++){
         for(k = 0; k < rooms[i].furniture.length; k++){
            if(rooms[i].furniture[k].attachedElements < rooms[i].furniture[k].maxElements){
               rooms[i].furniture[k].attachedElements++;
               rooms[i].furniture[k].elements.push(rooms[i].elements[j]);
               break;
            }         
         }
      }
   
   rooms[i].draw();
   console.log("Drew room " +i);
   }
}













