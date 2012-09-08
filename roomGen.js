/**Descriptor for items free standing items**/
function roomFurnitureDescriptor(description, imagefile, probability){
   this.description = description; // Name
   this.image = imagefile; //Path to image
   this.probability = probability; //0 to 1
}


/**Descriptor for items which sit on tables & desks.**/
function furnitureElementsDescriptor(description, imagefile, probability){
   this.description = description;
   this.imagefile = imagefile;
   this.probability = probability;
}

function setUpItems(){
   var i = 0;
   var furniture = [];
   furniture[i++] = new roomFurnitureDescriptor("Rug","",0.5);
   furniture[i++] = new roomFurnitureDescriptor("Lamp","",0.5);
   furniture[i++] = new roomFurnitureDescriptor("Drawers","",0.5);
   furniture[i++] = new roomFurnitureDescriptor("Chair","",0.5);
   furniture[i++] = new roomFurnitureDescriptor("Bookshelf","",0.5);
   furniture[i++] = new roomFurnitureDescriptor("Stool","",0.5);
   
   furniture[i++] = new roomFurnitureDescriptor("Bed","",0.33);
   furniture[i++] = new roomFurnitureDescriptor("Coffee Table","",0.33);
   furniture[i++] = new roomFurnitureDescriptor("Desk","",0.33);
   
   furniture[i++] = new roomFurnitureDescriptor("Plant","",0.25);
   furniture[i++] = new roomFurnitureDescriptor("Clock","",0.25);
   
   furniture[i++] = new roomFurnitureDescriptor("Couch","",0.1);
   furniture[i++] = new roomFurnitureDescriptor("Statue","",0.1);
   furniture[i++] = new roomFurnitureDescriptor("Painting","",0);
   
   
   furniture[i++] = new furnitureElementsDescriptor("Telephone","",0.1);
   furniture[i++] = new furnitureElementsDescriptor("Cup","",0);
   furniture[i++] = new furnitureElementsDescriptor("Globe","",0);
   furniture[i++] = new furnitureElementsDescriptor("Desk lamp","",0.1);
}

/**Need to make all rooms at once, to guarentee that special items will exist someone**/
function GenRooms(){

}



function Room(baseElements){
   this.
function makeRooms()
