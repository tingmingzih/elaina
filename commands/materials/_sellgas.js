/*CMD
  command: /sellgas
  help: 
  need_reply: false
  auto_retry_time: 
  folder: materials

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔥 sell
CMD*/

// set the minimum amount of gas required
const mingas = 500;

// get the current amount of gas
const gas = Libs.ResourcesLib.userRes("gas");

// check if there is enough gas
if (gas.value() < mingas) {
  // tell the user that there is not enough gas
  Bot.sendMessage(`You need at least ${mingas} gas to perform this action.`);
} else {
  // randomly select the amount of copper and silver to add
  const copperAmount = Math.floor(Math.random() * 5) + 3;
  const silverAmount = Math.floor(Math.random() * 1) + 1;

  // calculate the amount of gas to remove (between 256 and 512)
  const gasToRemove = Math.floor(Math.random() * 257) + 256;

  // remove the gas
  gas.remove(gasToRemove);

  // add the copper and silver
  const copper = Libs.ResourcesLib.userRes("copper");
  const silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage(`Removed ${gasToRemove} gas 🪵, added ${copperAmount} copper coin 🟠 and ${silverAmount} silver coin ⚪️.`);
}

// @MingZih
