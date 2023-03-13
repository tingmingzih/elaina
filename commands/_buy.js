/*CMD
  command: /buy
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
let accessories = Libs.ResourcesLib.userRes("accessories");

// Check if the user has at least 1 gold
if(gold.value() >= 1){

  // If the user has at least 1 gold, remove 1 gold, add 1 accessories
  
  gold.remove(1);
  accessories.add(1);
  
  // Send a message to the user indicating what actions have been taken
  Bot.sendMessage("You have used 1 gold to gain 1 valuable accessories");

} else {

  // If the user does not have at least 1 gold, send a message indicating that the action cannot be completed
  Bot.sendMessage("You do not have enough gold to perform this action!");

}

// @MingZih
