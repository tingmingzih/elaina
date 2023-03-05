/*CMD
  command: /food
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

// Define variables for the user's coins and health
let copper = Libs.ResourcesLib.userRes("copper")
let health = Libs.ResourcesLib.userRes("health")
let prelevel = Libs.ResourcesLib.userRes("prelevel");

// Check if the user has at least 5 coins and maximum 100 health
if (copper.value() >= 5 && health.value() < 100) {
  // Remove 1-5 copper and add 1-100 random health
  let coinsToRemove = Math.floor(Math.random() * 5) + 1
  let healthToAdd = Math.min(100 - health.value(), Math.floor(Math.random() * 100) + 1)
  copper.remove(coinsToRemove)
  health.add(healthToAdd)

// Add 20 prelevel to the user
  prelevel.add(20);
  
  // Generate a list of 100 random food names
  let foodNames = ["bun", "cake", "bread", "cheese", "chocolate", "cookie", "croissant", "cupcake", "donut", "eggs", "fruit", "hamburger", "hot dog", "ice cream", "juice", "meat", "muffin", "noodles", "omelette", "pasta", "pizza", "popcorn", "potato", "rice", "salad", "sandwich", "soup", "steak", "sushi", "taco", "toast", "waffle", "watermelon"]

  // Shuffle the food names array and select the first 100 items
  let shuffledFoodNames = foodNames.sort(() => 0.5 - Math.random())
  let randomFoodNames = shuffledFoodNames.slice(0, 1)

  // Send a message to the user with the updated values and the list of random food names
  Bot.sendMessage(
    "You have gained " + healthToAdd + " health and lost " + coinsToRemove + " coins!" +
    "\nyou have ate :" +
    "\n" + randomFoodNames.join(", ")
  )
} else {
  // Send a message to the user with the reasons why they couldn't gain health
  if (copper.value() < 5) {
    Bot.sendMessage("You don't have enough coins to buy food, you need at least 5 copper coins.")
  } else if (health.value() >= 100) {
    Bot.sendMessage("You already have maximum health.")
  }
}

// @MingZih
