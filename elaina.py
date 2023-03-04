import logging
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

# Enable logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                     level=logging.INFO)

logger = logging.getLogger(__name__)

# Define the start command handler
def start(update, context):
    update.message.reply_text('Hello! I am a bot. How can I help you?')

# Define the echo message handler
def echo(update, context):
    update.message.reply_text(update.message.text)

def main():
    # Create an updater object and token
    updater = Updater('6204839798:AAEFvw9Te46Z9UgbIaZfPOYPlDhXsuca0kg', use_context=True)

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # Add handlers for different commands and messages
    dp.add_handler(CommandHandler('start', start))
    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, echo))

    # Start the bot
    updater.start_polling()

    # Run the bot until you press Ctrl-C
    updater.idle()

if __name__ == '__main__':
    main()

