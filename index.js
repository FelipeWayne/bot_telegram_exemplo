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

    bot.sendMessage( msg.chat.id, "Teste", {
        "reply_markup": {
            "inline_keyboard": [
                [{
                  text: 'Nightclub',
                  callback_data: '1'
                }, {
                    text: 'Parks',
                    callback_data: '2'
                  }],
                [{
                  text: 'Restaurants',
                  callback_data: '3'
                }, {
                    text: 'Telecom',
                    callback_data: '4'
                  }],
                [{
                  text: 'Internet',
                  callback_data: '5'
                }],
            ],
            
        }
    })

})

