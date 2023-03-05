/*CMD
  command: /request
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
    let username = user.username;
    
    if (anotherCopper.have(amount)) {
       if (anotherCopper.transferTo(copper, amount)) {
         Bot.sendMessage("@" + username + " requested some copper coin 🟠");
       }
     } else {
        Bot.sendMessage("@" + username + " requested some copper coin 🟠");
     }
  }
} else {
  Bot.sendMessage("No params. Need another user TelegramID and amount of copper to request");
}

