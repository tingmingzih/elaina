/*CMD
  command: /sellwood
  help: 
  need_reply: false
  auto_retry_time: 
  folder: interaction 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🪵 sell
CMD*/

// set the minimum amount of wood required
const minWood = 500;

// get the current amount of wood
const wood = Libs.ResourcesLib.userRes("wood");

// check if there is enough wood
if (wood.value() < minWood) {
  // tell the user that there is not enough wood
  Bot.sendMessage(`You need at least ${minWood} wood 🪵 to perform this action.`);
} else {
  // randomly select the amount of copper and silver to add
  const copperAmount = Math.floor(Math.random() * 5) + 3;
  const silverAmount = Math.floor(Math.random() * 1) + 1;

  // calculate the amount of wood to remove (between 256 and 512)
  const woodToRemove = Math.floor(Math.random() * 257) + 256;

  // remove the wood
  wood.remove(woodToRemove);

  // add the copper and silver
  const copper = Libs.ResourcesLib.userRes("copper");
  const silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage(`Removed ${woodToRemove} woods 🪵, added ${copperAmount} copper coin 🟠 and ${silverAmount} silver coin ⚪️.`);
}

// @MingZih
