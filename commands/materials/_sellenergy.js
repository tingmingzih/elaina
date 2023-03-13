/*CMD
  command: /sellenergy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: materials

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⚡️ sell
CMD*/

// set the minimum amount of energy required
const minenergy = 500;

// get the current amount of energy
const energy = Libs.ResourcesLib.userRes("energy");

// check if there is enough energy
if (energy.value() < minenergy) {
  // tell the user that there is not enough energy
  Bot.sendMessage(`You need at least ${minenergy} energy to perform this action.`);
} else {
  // randomly select the amount of copper and silver to add
  const copperAmount = Math.floor(Math.random() * 5) + 3;
  const silverAmount = Math.floor(Math.random() * 1) + 1;

  // calculate the amount of energy to remove (between 256 and 512)
  const energyToRemove = Math.floor(Math.random() * 257) + 256;

  // remove the energy
  energy.remove(energyToRemove);

  // add the copper and silver
  const copper = Libs.ResourcesLib.userRes("copper");
  const silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage(`Removed ${energyToRemove} energys 🪵, added ${copperAmount} copper coin 🟠 and ${silverAmount} silver coin ⚪️.`);
}

// @MingZih
