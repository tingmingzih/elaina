/*CMD
  command: /bonus
  help: 🎲 Get random res
  need_reply: 
  auto_retry_time: 
  folder: Menu
  answer: 
  keyboard: 
  aliases: 🎲 get bonus
CMD*/

let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("money");
let amount = rnd.randomFloat(1, 100) 
money.add(amount);

Libs.ResourcesLib.userRes("wood").add(
  rnd.randomInt(1, 100) );
Libs.ResourcesLib.chatRes("crystals").add(
  rnd.randomInt(1, 100) );

Bot.runCommand("/balance");



