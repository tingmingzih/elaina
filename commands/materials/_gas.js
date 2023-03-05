/*CMD
  command: /gas
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

// Get the user's magic and gas resources
let magic = Libs.ResourcesLib.userRes("magic");
let gas = Libs.ResourcesLib.userRes("gas");

// Check how many times the user can use the command based on their remaining magic
let magicDrawsLeft = Math.floor(magic.value() / 25);

// Check if the user has enough magic to use the command
if(magic.have(25)){

  // If the user has enough magic, remove 25 magic and add a random amount of gas between 1 and 100
  magic.remove(25);
  let gasAmount = Math.floor(Math.random() * 99) + 1;
  gas.add(gasAmount);

  // Send a message to the user indicating how much gas they received
  Bot.sendMessage("you have been acquired *" + gasAmount.toLocaleString() + "* of gas 🔥, your total gas 🔥 count now is *" + gas.value().toLocaleString() + "*, and have *" + magic.value().toLocaleString() + "* magical power 🪄 remaining, you can draw gas *" + magicDrawsLeft.toLocaleString() + "* more times with your remaining magical power 🪄.");

} else {

  // If the user does not have enough magic, send a message indicating that the command cannot be used
  Bot.sendMessage("you do not have enough magic to use this command, please take a rest.");

}

// @MingZih
