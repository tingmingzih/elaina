/*CMD
  command: /tradegold
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
let gold = Libs.ResourcesLib.userRes("gold");
let health = Libs.ResourcesLib.userRes("health");
let silver = Libs.ResourcesLib.userRes("silver");
let prelevel = Libs.ResourcesLib.userRes("prelevel");

// Check if the user has at least 1 gold
if(gold.value() >= 1){

  // If the user has at least 1 gold, remove 1 gold, remove 1 health, add 3 silver, and add 30 prelevel
  gold.remove(1);
  health.remove(1);
  silver.add(3);
  prelevel.add(30);
  
  // Send a message to the user indicating what actions have been taken
  Bot.sendMessage("You have used 1 gold to gain 3 silver, lost 1 health, and gained 0.3 level!");

} else {

  // If the user does not have at least 1 gold, send a message indicating that the action cannot be completed
  Bot.sendMessage("You do not have enough gold to perform this action!");

}

// @MingZih
