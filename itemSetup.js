/**For defineing objects using magic numbers and files names.
   Prevents spamming other files up.**/
   
   

/** Furniture and things that sit on furniture**/
function setUpItems(){
   var i = 0;
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Rug","",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Lamp","",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Drawers","",0.5,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Chair","",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Bookshelf","",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Stool","",0.5);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Bed","",0.33);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Coffee Table","",0.33,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Desk","",0.33,2);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Plant","",0.25);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Clock","",0.25);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Couch","",0.1);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Statue","",0.1);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor("Painting","",-1);
   
   i = 0;
   elementDescriptors[i++] = new RoomElementDescriptor("Telephone","",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor("Cup","",-1);
   elementDescriptors[i++] = new RoomElementDescriptor("Globe","",-1);
   elementDescriptors[i++] = new RoomElementDescriptor("Desk lamp","",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor("TV","",0.1);
}

function setUpBackgrounds(){
   var i = 0;
   backgrounds[i++] = "./assets/backgrounds/black.jpg";
   backgrounds[i++] = "./assets/backgrounds/blue.jpg";
   backgrounds[i++] = "./assets/backgrounds/green.jpg";
   backgrounds[i++] = "./assets/backgrounds/red.jpg";
   backgrounds[i++] = "./assets/backgrounds/teal.jpg";
   backgrounds[i++] = "./assets/backgrounds/yellow.jpg"; 
}