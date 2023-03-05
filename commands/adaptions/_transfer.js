/*CMD
  command: /transfer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: adaptions

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (params) {
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if (!amount) {
    Bot.sendMessage("No amount has been input, you need to insert amount");
  } else {
    amount = parseFloat(amount);
    let copper = Libs.ResourcesLib.userRes("copper");
    let anotherCopper = Libs.ResourcesLib.anotherUserRes("copper", telegramid);
    
    if (copper.have(amount)) {
       if (copper.transferTo(anotherCopper, amount)) {
         let username = user.username;
         Bot.sendMessage("transferred *" + amount + "* copper coin 🟠\nTo: " + telegramid + "\nFrom: @" + username);
       }
     } else {
        Bot.sendMessage("You do not have enough copper: " + amount + " to transfer");
     }
  }
} else {
  Bot.sendMessage("No params. Need another user TelegramID and amount of copper to transfer");
}

