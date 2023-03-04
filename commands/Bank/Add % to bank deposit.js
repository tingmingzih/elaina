/*CMD
  command: Add % to bank deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bank
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
let cur_increment = bank_deposit.growth.info().increment;
let new_increment = cur_increment + 0.01;
let secs_in_5minutes = 60*5

bank_deposit.growth.addCompoundInterest({
  percent: new_increment,
  interval: secs_in_5minutes
});

Bot.inspect(bank_deposit.growth.info());  // just show full info

Bot.sendMessage("Growth: 0.01% was addded to Bank Deposit. Cur growth: " + cur_increment + "%");

