/*CMD
  command: /energy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: materials

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Get the user's magic and energy resources
let magic = Libs.ResourcesLib.userRes("magic");
let energy = Libs.ResourcesLib.userRes("energy");
let prelevel = Libs.ResourcesLib.userRes("prelevel");
let health = Libs.ResourcesLib.userRes("health");

// Check how many times the user can use the command based on their remaining magic
let magicDrawsLeft = Math.floor(magic.value() / 25);

// Add 20 prelevel to the user
  prelevel.add(20);  

// Remove 1 health from the user
health.remove(1);

// Check if the user has enough magic to use the command
if(magic.have(25)){

  // If the user has enough magic, remove 25 magic and add a random amount of energy between 1 and 100
  magic.remove(25);
  let energyAmount = Math.floor(Math.random() * 99) + 1;
  energy.add(energyAmount);

  // Send a message to the user indicating how much energy they received
  Bot.sendMessage("you have been stored *" + energyAmount.toLocaleString() + "* pieces of energy ⚡️, your total energy ⚡️ count now is *" + energy.value().toLocaleString() + "*, and have *" + magic.value().toLocaleString() + "* magical power 🪄 remaining, you can draw energy *" + magicDrawsLeft.toLocaleString() + "* more times with your remaining magical power 🪄.");

} else {

  // If the user does not have enough magic, send a message indicating that the command cannot be used
  Bot.sendMessage("you do not have enough magic to use this command, please take a rest.");

}

// @MingZih
