const TelegramBot = require( 'node-telegram-bot-api' )

require('dotenv').config()

// console.log(process.env.BOT_TOKEN)
console.log('****************************')
console.log('Bot de pé')
console.log('****************************')

const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )


bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "E ai parça, " + msg.from.first_name , {
        "reply_markup": {
            "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    })
    
})




bot.on('message', (msg) => {
    var Hi = 'hi'
    if ( msg.text.toString().toLocaleLowerCase().indexOf(Hi) === 0 ) {
        bot.sendMessage( msg.chat.id, "Hello dear user" )
    }
})

