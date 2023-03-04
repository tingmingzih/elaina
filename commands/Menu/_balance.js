/*CMD
  command: /balance
  help: show my current resources
  need_reply: 
  auto_retry_time: 
  folder: Menu
  answer: It is your resources
  keyboard: 📦 Resources, 🎲 Get Bonus,\n🔧 Set 10 for all resoures, 💵 Pay 100$,\n🏦 Bank
  aliases: 📦 resources, ❌ cancel
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.chatRes("crystals");

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
let cur_increment = bank_deposit.growth.info().increment;

let bank_deposit2 = Libs.ResourcesLib.userRes("bank_deposit2");

Bot.sendMessage(
      "For user 👤 @" + user.username +
      "/" + user.telegramid +
      "\n\n*In any chats with this bot:*" +
      "\n💰 money: " + money.value().toFixed(4) + " USD" +
      "\n🌳 wood: " + wood.value() +
      
      "\n\n🏦 *Bank*" +
      "\n*Deposit*: " + bank_deposit.value().toFixed(4) + " USD" +
      "\nEvery 5 minute ⌚:" +
      "\n   - added " + cur_increment + "%" +
      
      "\n\n   📈Iterations: " + bank_deposit.growth.info().completed_iterations_count +
      "\n     progress: " + bank_deposit.growth.progress().toFixed(2) + "%" +
      "\n     next in: " + bank_deposit.growth.willCompletedAfter().toFixed(1) + " secs" + 
      "\n-------" +

      "\n*Deposit2*: " + bank_deposit2.value().toFixed(4) + " USD" +
      "\nEvery 1 minute ⌚:" +
      "\n   - added 0.0005%" +
      
      "\n\n📈   Iterations: " + bank_deposit2.growth.info().completed_iterations_count +
      "\n     progress: " + bank_deposit2.growth.progress().toFixed(2) + "%" +
      "\n     next in: " + bank_deposit2.growth.willCompletedAfter().toFixed(1) + " secs" + 
      "\n-------" +



      "\n\n*Only in current chat:*" +
       "\n💎 crystals: " + crystals.value() +

      "\n\n*Transfer money 45 USD to* @" + user.username + ":"+
      "\n\n`/pay " + user.telegramid + " 45`" + 
      
      "\n\nTest transfering in chat: https://t.me/bbdemoexchange"
);

