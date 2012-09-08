var furnitureDescriptors = [];  //furniture Objects
var elementDescriptors = [];   //in room Objects
var backgrounds = [];//Files containing background images
var rooms = [];      //Room objects

function randomBackground(){
   var bgNum = Math.floor(Math.random()*backgrounds.length);
   return backgrounds[bgNum];
}

/**Helper**/
function pick(arg, def) {
   return (typeof arg == 'undefined' ? def : arg);
}


/**Descriptor for items free standing items**/
function RoomFurnitureDescriptor(description, imagefile, probability, holds){
   this.description = description; // Name
   this.image = imagefile; //Path to image
   this.probability = probability; //0 to 1
   this.holds = pick(holds,0);
   
   
}/**Descriptor for items requiring tables/desks**/
function RoomElementDescriptor(description, imagefile, probability){
   this.description = description; // Name
   this.image = imagefile; //Path to image
   this.probability = probability; //0 to 1
}

function RoomFurniture(item){
   this.furnitureDescriptor = item;
   this.attachedElements = 0;
   this.maxElements = item.holds;
   this.elements = [];
   this.xpos = -1;
   this.ypos = -1;

}

function RoomElement(item){
   this.elementDescriptor = item;

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
      this.craftyEntity = Crafty.e("2D, Canvas, Image")
         .attr({x: this.index * length_of_rooms, y: 0, w: length_of_rooms, h: height})
         .image(this.background)
      var furniturePos = 0;
      for(i = 0; i <  this.furniture.length; i++){
         //furniturePos+= this.furniture[i].draw(furniturePos); //move the position to draw furniture by this amount
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













