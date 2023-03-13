/*CMD
  command: /rest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🪄 rest
CMD*/

// Get the user's resources
let magic = Libs.ResourcesLib.userRes("magic");
let prelevel = Libs.ResourcesLib.userRes("prelevel");

// Define the minimum value for the magic resource to activate resting messages
const MIN_MAGIC = 0;

// Set magic to 1024 if it is below 500
if (magic.value() < 500) {
  magic.set(1024);
  Bot.sendMessage("Your magic has restored to 1,024 and you gained some prelevel points.");
} else {
  Bot.sendMessage("Your magic is already above 500, no need to restore it.");
}

// Generate 25 random resting messages on random places if magic is below the minimum value
if (magic.value() < MIN_MAGIC) {
  const places = ["the park", "the beach", "the mountains", "a cozy cafe", "a luxurious spa", "a beautiful garden", "a quiet library", "a fancy restaurant", "a movie theater", "a peaceful lake"];
  const messages = ["Take a deep breath and relax", "Clear your mind and find inner peace", "Enjoy the moment and let go of stress", "Savor the tranquility and forget your worries", "Recharge your energy and feel renewed", "Find your happy place and stay awhile", "Indulge in some self-care and pampering", "Escape from the hustle and bustle of everyday life", "Bask in the beauty of nature and find serenity", "Unwind and recharge your batteries"];

  for (let i = 0; i < 1; i++) {
    const place = places[Math.floor(Math.random() * places.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];
    Bot.sendMessage(`Resting at ${place}... ${message}.`);
  }
}

// Add some extra prelevel
const prelevelToAdd = Math.floor(Math.random() * 50) + 10; // Random number between 10 and 59
prelevel.add(prelevelToAdd);

// @MingZih
