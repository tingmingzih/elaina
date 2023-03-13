/*CMD
  command: /sellwater
  help: 
  need_reply: false
  auto_retry_time: 
  folder: materials

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💧 sell
CMD*/

// set the minimum amount of water required
const minwater = 500;

// get the current amount of water
const water = Libs.ResourcesLib.userRes("water");

// check if there is enough water
if (water.value() < minwater) {
  // tell the user that there is not enough water
  Bot.sendMessage(`You need at least ${minwater} water to perform this action.`);
} else {
  // randomly select the amount of copper and silver to add
  const copperAmount = Math.floor(Math.random() * 5) + 3;
  const silverAmount = Math.floor(Math.random() * 1) + 1;

  // calculate the amount of water to remove (between 256 and 512)
  const waterToRemove = Math.floor(Math.random() * 257) + 256;

  // remove the water
  water.remove(waterToRemove);

  // add the copper and silver
  const copper = Libs.ResourcesLib.userRes("copper");
  const silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage(`Removed ${waterToRemove} waters 🪵, added ${copperAmount} copper coin 🟠 and ${silverAmount} silver coin ⚪️.`);
}

// @MingZih
