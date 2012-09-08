var i = 0;
var furniture = [];
var elements = [];
   
var backgrounds = [];
backgrounds[i++] = "./assets/backgrounds/black.jpg";
backgrounds[i++] = "./assets/backgrounds/blue.jpg";
backgrounds[i++] = "./assets/backgrounds/green.jpg";
backgrounds[i++] = "./assets/backgrounds/red.jpg";
backgrounds[i++] = "./assets/backgrounds/teal.jpg";
backgrounds[i++] = "./assets/backgrounds/yellow.jpg";   
i = 0;

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


function setUpItems(){
   furniture[i++] = new RoomFurnitureDescriptor("Rug","",0.5);
   furniture[i++] = new RoomFurnitureDescriptor("Lamp","",0.5);
   furniture[i++] = new RoomFurnitureDescriptor("Drawers","",0.5,2);
   furniture[i++] = new RoomFurnitureDescriptor("Chair","",0.5);
   furniture[i++] = new RoomFurnitureDescriptor("Bookshelf","",0.5);
   furniture[i++] = new RoomFurnitureDescriptor("Stool","",0.5);
   
   furniture[i++] = new RoomFurnitureDescriptor("Bed","",0.33);
   furniture[i++] = new RoomFurnitureDescriptor("Coffee Table","",0.33,2);
   furniture[i++] = new RoomFurnitureDescriptor("Desk","",0.33,2);
   
   furniture[i++] = new RoomFurnitureDescriptor("Plant","",0.25);
   furniture[i++] = new RoomFurnitureDescriptor("Clock","",0.25);
   
   furniture[i++] = new RoomFurnitureDescriptor("Couch","",0.1);
   furniture[i++] = new RoomFurnitureDescriptor("Statue","",0.1);
   furniture[i++] = new RoomFurnitureDescriptor("Painting","",-1);
   
   
   elements[i++] = new RoomElementDescriptor("Telephone","",0.1);
   elements[i++] = new RoomElementDescriptor("Cup","",-1);
   elements[i++] = new RoomElementDescriptor("Globe","",-1);
   elements[i++] = new RoomElementDescriptor("Desk lamp","",0.1);
   elements[i++] = new RoomElementDescriptor("TV","",0.1);
}

/**Need to make all rooms at once, to guarentee that special items will exist someone**/
function GenRooms(){
   var i,j,k;
   console.log("Genrooms called");
   //Create a bunch of rooms. number of rooms to create defined in setting.js
   var rooms = [];
   for(i = 0; i < number_of_rooms; i++){
      rooms[i] = new Room(i);
   }
   
   //Pick which room gets the special items. These are marked with '-1' as the probability
   //furniture
   for(i = 0; i < furniture.length ; i++){
      if(furniture[i].probability < 0){
         var roomNum = Math.floor(Math.random() * number_of_rooms);
         rooms[roomNum].furniture.push(new RoomFurniture(furniture[i]));
      }
   }
   //elements
   for(i = 0; i < elements.length ; i++){
      if(elements[i].probability < 0){
         var roomNum = Math.floor(Math.random() * number_of_rooms);
         rooms[roomNum].elements.push(new RoomFurniture(furniture[i]));
         rooms[roomNum].spareElementPlaces--; //one less space for an object to sit.
      }
   }
   
   /**If a room has elements, then it needs furniture to support them. Instead of doinf something intelligent, I'll just go through the rooms adding 
      furniture normally, go through the end, attempt to attahc the 'loose' elements to furniture, and If i can't, then add another table/etc.**/
      
   //Place normal furniture**/
   for(i = 0; i < number_of_rooms; i++){
      for(j = 0; j < furniture.length ; j++){
         if(furniture[j].probability > Math.random()){
            rooms[i].furniture.push(new RoomFurniture(furniture[j]));
            rooms[i].spareElementPlaces+=furniture[j].holds;
         }
      }
   
      //Should use permututations to walk through the elements array, so we dont' bias toward elements first in the list if we run out of spaces
      for(j = 0; j < elements.length ; j++){
         if(elements[j].probability > Math.random() && room[i].spareElementPlaces > 0){
            rooms[i].elements.push(new RoomElement(elements[j]));
            rooms[i].spareElementPlaces--;
         }
      }
   
      //Now, we need to check there are enough tables to put everything on to. Check if any room has -1 spare sapces. If so, add somethign with >0 spaces.
      //FIXME, Should really use permutated list here too...
      //Should use permututations to walk through the furniture array, so we dont' bias toward furniture first in the list
      if(rooms[i].spareElementPlaces<0){
         for(j = 0; j < rooms[i].elements.length ; j++){
            if(furniture[j].holds > 0){
               rooms[i].furniture.push(new RoomFurniture(furniture[j]));
            }
         }
      }
   
      //Should now attached elements to suitable furniture. Note that Elements are NOT given positions byt the room, but, instead by the furniture they sit upon.
      
      
      for(j = 0; j < elements.length ; j++){
         for(k = 0; k < furniture.length; k++){
            if(rooms[i].furniture[i].attachedElements < furniture[i].maxElements){
               rooms[i].furniture[i].attachedElements++;
               rooms[i].furniture[i].elements.push(rooms[i].element[j]);
               break;
            }         
         }
      }
   
   rooms[i].draw();
   console.log("Drew room" +i);
   }
}













