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
  aliases: 
CMD*/

// set the minimum amount of stone required
var minstone = 512;

// get the current amount of stone
var stone = Libs.ResourcesLib.userRes("stone");

// calculate the minimum amount of stone needed after removing some
var minstoneAfterRemove = minstone + Math.floor(Math.random() * 257) + 256;

// check if there is enough stone
if (stone.value < minstoneAfterRemove) {
  // tell the user that there is not enough stone
  Bot.sendMessage("You need at least " + minstone + " stone to perform this action.");
} else {
  // randomly select the amount of copper and silver to add
  var copperAmount = Math.floor(Math.random() * 5) + 1;
  var silverAmount = Math.floor(Math.random() * 2) + 1;

  // remove the stone
  stone.remove(minstoneAfterRemove - minstone);

  // add the copper and silver
  var copper = Libs.ResourcesLib.userRes("copper");
  var silver = Libs.ResourcesLib.userRes("silver");
  copper.add(copperAmount);
  silver.add(silverAmount);

  // tell the user what happened
  Bot.sendMessage("Removed " + (minstoneAfterRemove - minstone) + " stones 🪨, added " + copperAmount + " copper coin 🟠 and " + silverAmount + " silver coin ⚪️.");
}

