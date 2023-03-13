/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Define variables
var mtzkqr =
  "http://chart.apis.google.com/chart?cht=qr&chs=500x500&" +
  "chl=" +
  message +
  "&chld=H|0"

// Send Messages
Api.sendPhoto({
  photo: mtzkqr,
  caption: "massage: " + "<b>" + message + "</b>" + "\n" + "developer: @MingZih",
  parse_mode: "HTML"
})

// @MingZih
