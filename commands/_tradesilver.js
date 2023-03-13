/*CMD
  command: /tradesilver
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Get the user's resources
let silver = Libs.ResourcesLib.userRes("silver");
let health = Libs.ResourcesLib.userRes("health");
let copper = Libs.ResourcesLib.userRes("copper");
let prelevel = Libs.ResourcesLib.userRes("prelevel");

// Check if the user has at least 1 silver
if(silver.value() >= 1){

  // If the user has at least 1 silver, remove 1 silver, remove 1 health, add 3 copper, and add 30 prelevel
  silver.remove(1);
  health.remove(1);
  copper.add(3);
  prelevel.add(30);
  
  // Send a message to the user indicating what actions have been taken
  Bot.sendMessage("You have used 1 silver to gain 3 copper, lost 1 health, and gained 0.3 level!");

} else {

  // If the user does not have at least 1 silver, send a message indicating that the action cannot be completed
  Bot.sendMessage("You do not have enough silver to perform this action!");

}

// @MingZih
