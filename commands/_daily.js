/*CMD
  command: /daily
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

Libs.CooldownLib.chat.watch({
  // you need name for cooldown
  name: "DailyRewardsCooldown",
  time: 86400, // cooldown time, 86400 secs - 24 hours
  onEnding: onEnding,
  onWaiting: onWaiting
})

// get current cooldown res
let cooldown = Libs.CooldownLib.chat.getCooldown("DailyRewardsCooldown");
cooldown.value(); // current cooldown in second
cooldown.set(86400 + cooldown.value()) // add 86400 sec to cooldown

// function to generate daily rewards
function onEnding(time){
  // generate daily rewards
  // random number generator 0-10
  let copperReward = Math.floor(Math.random() * 11);
  // random number generator 0-5
  let silverReward = Math.floor(Math.random() * 6);
  // random number generator 0-2
  let goldReward = Math.floor(Math.random() * 3);
  
  Bot.sendMessage("You have earned: " + copperReward + " Copper, " + silverReward + " Silver, " + goldReward + " Gold.");
  
  return true; // if false - cooldown is not restarted
}

// display the time remaining for the rewards
function onWaiting(waitTime){
  Bot.sendMessage("Daily rewards will be given in: " + waitTime + " secs" );
}

// @MingZih
