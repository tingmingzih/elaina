/*CMD
  command: /remove
  help: 
  need_reply: false
  auto_retry_time: 
  folder: moderation 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Get the user's resources
let  = Libs.ResourcesLib.userRes("");

// Add 1024 to the variable
.remove(1024);

// Send a message to confirm new value have been changed of the the previous variable
Bot.sendMessage("command successfully executed");

// @MingZih
