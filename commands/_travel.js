/*CMD
  command: /travel
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

// Define variables for the user's resources
let magic = Libs.ResourcesLib.userRes("magic")
let copper = Libs.ResourcesLib.userRes("copper")
let silver = Libs.ResourcesLib.userRes("silver")
let health = Libs.ResourcesLib.userRes("health")
let prelevel = Libs.ResourcesLib.userRes("prelevel")
let travel = Libs.ResourcesLib.userRes("travel")

// Define the minimum values for the resources
const MIN_MAGIC = 512
const MIN_COPPER = 10
const MIN_SILVER = 5
const MIN_HEALTH = 50

// Check if the user has the minimum required resources
if (magic.value() < MIN_MAGIC || copper.value() < MIN_COPPER || silver.value() < MIN_SILVER || health.value() < MIN_HEALTH) {
  // Send a message with the minimum required resources
  Bot.sendMessage(`You need at least ${MIN_MAGIC} magic, ${MIN_COPPER} copper coin, ${MIN_SILVER} silver coin, and ${MIN_HEALTH} health.`)
} else {
  // Remove resources from the user
  let magicToRemove = Math.floor(Math.random() * (512 - 128 + 1)) + 128 // Random number between 128 and 512
  let copperToRemove = Math.floor(Math.random() * (10 - 1 + 1)) + 1 // Random number between 1 and 10
  let silverToRemove = Math.floor(Math.random() * (5 - 1 + 1)) + 1 // Random number between 1 and 5
  let healthToRemove = 50 // Always remove 50 health
  
  magic.remove(magicToRemove)
  copper.remove(copperToRemove)
  silver.remove(silverToRemove)
  health.remove(healthToRemove)

  // Add resources to the user
  let prelevelToAdd = Math.floor(Math.random() * (100 - 50 + 1)) + 50 // Random number between 50 and 100
  let travelToAdd = 1
  
  prelevel.add(prelevelToAdd)
  travel.add(travelToAdd)

  // Send a message with the resources that were removed and added
  Bot.sendMessage(`You lost ${healthToRemove} health, ${copperToRemove} copper coin, ${silverToRemove} silver coin, and ${magicToRemove} magic. You gained ${prelevelToAdd} prelevel and ${travelToAdd} travel.`)
}

// @MingZih
