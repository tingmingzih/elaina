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
  aliases: 
CMD*/

// Define variables for the user's role, level, magic, and inventory resources, as well as for the various coin and material resources
let level = Libs.ResourcesLib.userRes("level")
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

// Calculate the total amount of materials the user has
let totalMaterials =
  wood.value() +
  stone.value() +
  oil.value() +
  gas.value() +
  energy.value() +
  water.value()

// Add 1 level to the user
level.add(1);

// Add the total materials to the user's inventory
inventory.set(totalMaterials)

if (level.value() >= 0 && level.value() <= 25) {
  role = "none";
} else if (level.value() >= 26 && level.value() <= 50) {
  role = "mage";
} else if (level >= 51.value() && level.value() <= 75) {
  role = "apprentice witch";
} else if (level.value() >= 76 && level.value() <= 100) {
  role = "witch";
} else {
  role = "unknown";
}

console.log(role);

// Send a message to the user with their current status, including their role, level, magic, inventory, coins, and materials
Bot.sendMessage(
  "*status*:" +
    "\n🧙‍♀️ magic ability: " + role +
    "\n🪄 magic: " +
    formattedmagic +
    "\n📚 Level: " + level.value() +
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

