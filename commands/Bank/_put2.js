/*CMD
  command: /put2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bank
  answer: 
  keyboard: 
  aliases: put 100$ to deposit2
CMD*/


    let res = Libs.ResourcesLib.userRes("money");
    let bank_deposit2 = Libs.ResourcesLib.userRes("bank_deposit2");
    
    if(res.have(105)){
       if( res.exchangeTo(bank_deposit2, { remove_amount: 105, add_amount: 100  }) ){
         
         let secs_in_1minutes = 1 * 60;
         bank_deposit2.growth.addCompoundInterest({percent: 0.0005, interval: secs_in_1minutes });
   
         Bot.sendMessage("Transfered USD to bank deposit: " + 100 + "\nBank take 5$ as commission. Growth 0.0005% each min" );
       }
     }else{
        Bot.sendMessage("You have not such USD: " + 105);
     }
