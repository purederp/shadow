/** Game settings **/
 var number_of_rooms = 11;
 var number_of_event_rooms = number_of_rooms - 1;
 var length_of_rooms = 1200;
 var total_length = number_of_rooms * length_of_rooms + length_of_rooms; //For start and end of world fillers (length/2 each
 var total_length_usable = number_of_rooms * length_of_rooms; 
 var height = 300;
 var worldHeight = height; //Should use this instead, less ambigous
 var viewport_width = 900;
 var player_height = 130;
 var player_width = 50;
 var floor_height = 67;
 var initialHealth = 100; //starting health
 var playerHealth = initialHealth;
 var healthDepeletion  = 1;// HP/second
 var healthLevels = 9; //Number of spotlight<x> files. don't prefix numbers with 0.
 var player_floor_height = Math.floor(floor_height*2/3); //so he walk on the floor, not the skirting board
 var drawMethod = " Canvas ";
 
 var startBarrier = 5 ;//can't get closer than this to the start
 var endBarrier = 50 ;//can't get closer than this to the end
 var playerSpeed=30;
/**END Game settings**/ 
