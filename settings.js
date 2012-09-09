/** Game settings **/
 var number_of_rooms = 10;
 var length_of_rooms = 1200;
 var total_length = number_of_rooms * length_of_rooms;
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
/**END Game settings**/ 
