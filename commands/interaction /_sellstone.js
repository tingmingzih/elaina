/*CMD
  command: /sellstone
  help: 
  need_reply: false
  auto_retry_time: 
  folder: interaction 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🪨 sell
CMD*/

// set the minimum amount of stone required
const minstone = 500;

// get the current amount of stone
const stone = Libs.ResourcesLib.userRes("stone");

// check if there is enough stone
if (stone.value() < minstone) {
  // tell the user that there is not enough stone
  Bot.sendMessage(`You need at least ${minstone} stone 🪵 to perform this action.`);
} else {
  // randomly select the amount of copper and silver to add
  const copperAmount = Math.floor(Math.random() * 5) + 3;
  const silverAmount = Math.floor(Math.random() * 1) + 1;

  // calculate the amount of stone to remove (between 256 and 512)
  const stoneToRemove = Math.floor(Math.random() * 257) + 256;

  // remove the stone
  stone.remove(stoneToRemove);

  // add the copper and silver
  const copper = Libs.ResourcesLib.userRes("copper");
  const silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage(`Removed ${stoneToRemove} stones 🪵, added ${copperAmount} copper coin 🟠 and ${silverAmount} silver coin ⚪️.`);
}

// @MingZih
