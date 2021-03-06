/**For defineing objects using magic numbers and files names.
   Prevents spamming other files up.**/
   
   

/** Furniture and things that sit on furniture**/
function setUpItems(){
   var i = 0;
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(150,30,-1,"Rug","images/furniture/rug0.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(152,49,-1,"Rug","images/furniture/rug1.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(173,44,-1,"Rug","images/furniture/rug2.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(30,115,0,"Lamp","images/furniture/lamp0.png",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(76,51,0,"Drawers","images/furniture/drawer0.png",0.5/3,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(114,71,0,"Drawers","images/furniture/drawer1.png",0.5/3,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(54,89,0,"Drawers","images/furniture/drawer2.png",0.5/3,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(52,75,0,"Chair","images/furniture/chair0.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(80,69,0,"Chair","images/furniture/chair1.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(66,85,0,"Chair","images/furniture/chair2.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(54,107,0,"Bookshelf","images/furniture/bookshelf0.png",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(27,53,0,"Stool","images/furniture/stool0.png",0.5/2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(30,28,0,"Stool","images/furniture/stool1.png",0.5/2);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(161,91,0,"Bed","images/furniture/bed.png",0.33);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(77,33,0,"Coffee Table","images/furniture/coffee0.png",0.33,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(155,61,0,"Desk","images/furniture/desk0.png",0.33,2);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(30,41,0,"Plant","images/furniture/plant0.png",0.25);
//   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Clock","images/furniture/.png",0.25);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(158,85,0,"Couch","images/furniture/sofa0.png",0.1);
//   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Statue","images/furniture/.png",0.1);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(39,60,1,"Painting","images/furniture/painting0.png",-1);
   
   i = 0;
   elementDescriptors[i++] = new RoomElementDescriptor(29,23,"Telephone","images/elements/phone.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(16,21,"Cup","images/elements/cup0.png",-1);
   elementDescriptors[i++] = new RoomElementDescriptor(36,53,"Globe","images/elements/globe0.png",-1);
   elementDescriptors[i++] = new RoomElementDescriptor(25,42,"Desk lamp","images/elements/lamp0.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(26,72,"Desk lamp","images/elements/lamp1.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(33,47,"Desk lamp","images/elements/lamp2.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(34,50,"TV","images/elements/television0.png",0.1);
}

function setUpBackgrounds(){
   var i = 0;
   backgrounds[i++] = "./images/rooms/room0.png"; 
   backgrounds[i++] = "./images/rooms/room1.png"; 
   backgrounds[i++] = "./images/rooms/room2.png"; 
   backgrounds[i++] = "./images/rooms/room3.png"; 
   backgrounds[i++] = "./images/rooms/room4.png"; 
   backgrounds[i++] = "./images/rooms/room5.png"; 
   backgrounds[i++] = "./images/rooms/room6.png"; 
   backgrounds[i++] = "./images/rooms/room7.png"; 
   backgrounds[i++] = "./images/rooms/room8.png"; 
   backgrounds[i++] = "./images/rooms/room9.png"; 
}
