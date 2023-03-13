/*CMD
  command: /status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🌟 status 🌟
CMD*/

// Define variables for the user's role, level, magic, and inventory resources, as well as for the various coin and material resources
let level = Libs.ResourcesLib.userRes("level")
let prelevel = Libs.ResourcesLib.userRes("prelevel")
let magic = Libs.ResourcesLib.userRes("magic")
let inventory = Libs.ResourcesLib.userRes("inventory")
let copper = Libs.ResourcesLib.userRes("copper")
let silver = Libs.ResourcesLib.userRes("silver")
let gold = Libs.ResourcesLib.userRes("gold")
let wood = Libs.ResourcesLib.userRes("wood")
let stone = Libs.ResourcesLib.userRes("stone")
let oil = Libs.ResourcesLib.userRes("oil")
let gas = Libs.ResourcesLib.userRes("gas")
let energy = Libs.ResourcesLib.userRes("energy")
let water = Libs.ResourcesLib.userRes("water")
let role = Libs.ResourcesLib.userRes("role")
let travel = Libs.ResourcesLib.userRes("travel")
let distance = Libs.ResourcesLib.userRes("distance")
let health = Libs.ResourcesLib.userRes("health")
let friend = Libs.ResourcesLib.userRes("friend")
let accessories = Libs.ResourcesLib.userRes("accessories")

// Format the values with commas for every thousand
let formattedmagic = magic.value().toLocaleString()
let formattedwood = wood.value().toLocaleString()
let formattedstone = stone.value().toLocaleString()
let formattedoil = oil.value().toLocaleString()
let formattedgas = gas.value().toLocaleString()
let formattedenergy = energy.value().toLocaleString()
let formattedwater = water.value().toLocaleString()
let formattedcopper = copper.value().toLocaleString()
let formattedsilver = silver.value().toLocaleString()
let formattedgold = gold.value().toLocaleString()

// Define the maximum level value
const MAX_LEVEL = 100;

// Define the average level value
const AVG_LEVEL = 50;

// Define display
let display = "(min)";

// Check if the level is already at max
if (level.value() >= AVG_LEVEL) {
  // Set the display variable to "full"
  display = "(avg)";
}

// Check if the level is already at max
if (level.value() >= MAX_LEVEL) {
  // Set the display variable to "full"
  display = "(max)";
}

// Calculate the total amount of materials the user has
let totalMaterials =
  wood.value() +
  stone.value() +
  oil.value() +
  gas.value() +
  energy.value() +
  water.value()

// if level reach 100, and keep the level
if (level.value() >= 100) {
  level.set(100);
}

// Add 10 prelevel to the user
prelevel.add(10);

// Remove 1 health from the user
health.remove(1);

// Add 1 level if prelevel reach 100, and reset prelevel value
if (prelevel.value() >= 90) {
  level.add(1);
  prelevel.set(0);
}

// Add the total materials to the user's inventory
inventory.set(totalMaterials)

// Role acceleration
if (level.value() <= 25) {
  role = "none";
} else if (level.value() <= 50) {
  role = "mage";
} else if (level.value() <= 75) {
  role = "apprentice witch";
} else if (level.value() <= 100) {
  role = "witch";
} else {
  role = "unknown";
}

console.log(role);

// Send a message to the user with their current status, including their role, level, magic, inventory, coins, and materials
Bot.sendMessage(
  "*status*:" +
    "\n🧙‍♀️ magic ability: " + role +
    "\n📚 level: " + level.value() + "." + prelevel.value() + " " + display +
    "\n🪄 magic: " +
    formattedmagic +
    "\n🫂 interaction: " + friend.value() +
    "\n📿 accessories: " + accessories.value() +
    "\n♥️ health: " + health.value() + " %" +
    "\n🏯 country: " + travel.value() + " visited" +
    "\n🧹 travelled: " + distance.value() + " km" +
    "\n🗃 inventory: " +
    inventory.value().toLocaleString() +
    "\n*coins:*" +
    "\n🟠 copper coin: " +
    formattedcopper +
    "\n⚪️ silver coin: " +
    formattedsilver +
    "\n🟡 gold coin: " +
    formattedgold +
    "\n*materials*:" +
    "\n🪵 wood: " +
    formattedwood +
    "\n🪨 stone: " +
    formattedstone +
    "\n🛢 oil: " +
    formattedoil +
    "\n🔥 gas: " +
    formattedgas +
    "\n⚡️ energy: " +
    formattedenergy +
    "\n💧 water: " +
    formattedwater
)

// @MingZih
