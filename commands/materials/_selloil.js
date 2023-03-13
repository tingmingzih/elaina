/*CMD
  command: /selloil
  help: 
  need_reply: false
  auto_retry_time: 
  folder: materials

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🛢 sell
CMD*/

// set the minimum amount of oil required
const minoil = 500;

// get the current amount of oil
const oil = Libs.ResourcesLib.userRes("oil");

// check if there is enough oil
if (oil.value() < minoil) {
  // tell the user that there is not enough oil
  Bot.sendMessage(`You need at least ${minoil} oil 🪵 to perform this action.`);
} else {
  // randomly select the amount of copper and silver to add
  const copperAmount = Math.floor(Math.random() * 5) + 3;
  const silverAmount = Math.floor(Math.random() * 1) + 1;

  // calculate the amount of oil to remove (between 256 and 512)
  const oilToRemove = Math.floor(Math.random() * 257) + 256;

  // remove the oil
  oil.remove(oilToRemove);

  // add the copper and silver
  const copper = Libs.ResourcesLib.userRes("copper");
  const silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage(`Removed ${oilToRemove} oils 🪵, added ${copperAmount} copper coin 🟠 and ${silverAmount} silver coin ⚪️.`);
}

// @MingZih
