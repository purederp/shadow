/**For defineing objects using magic numbers and files names.
   Prevents spamming other files up.**/
   
   

/** Furniture and things that sit on furniture**/
function setUpItems(){
   var i = 0;
   //furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Rug","images/furniture/rug0.png",0.5/3);
   //furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Rug","images/furniture/rug1.png",0.5/3);
   //furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Rug","images/furniture/rug2.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Lamp","images/furniture/lamp0.png",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Drawers","images/furniture/drawer0.png",0.5/3,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Drawers","images/furniture/drawer1.png",0.5/3,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Drawers","images/furniture/drawer2.png",0.5/3,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Chair","images/furniture/chair0.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Chair","images/furniture/chair1.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Chair","images/furniture/chair2.png",0.5/3);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Bookshelf","images/furniture/bookshelf0.png",0.5);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Stool","images/furniture/stool0.png",0.5/2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Stool","images/furniture/stool1.png",0.5/2);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Bed","images/furniture/bed.png",0.33);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Coffee Table","images/furniture/coffee0.png",0.33,2);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Desk","images/furniture/desk0.png",0.33,2);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Plant","images/furniture/plant0.png",0.25);
//   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Clock","images/furniture/.png",0.25);
   
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Couch","images/furniture/sofa0.png",0.1);
//   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Statue","images/furniture/.png",0.1);
   furnitureDescriptors[i++] = new RoomFurnitureDescriptor(20,20,0,"Painting","images/furniture/painting0.png",-1);
   
   i = 0;
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"Telephone","images/elements/phone.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"Cup","images/elements/cup0.png",-1);
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"Globe","images/elements/globe0.png",-1);
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"Desk lamp","images/elements/lamp0.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"Desk lamp","images/elements/lamp1.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"Desk lamp","images/elements/lamp2.png",0.1);
   elementDescriptors[i++] = new RoomElementDescriptor(10,10,"TV","images/elements/television0.png",0.1);
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
