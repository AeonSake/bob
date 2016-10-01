// ===== SETTINGS =====
var Botkit = require('botkit')
var os = require('os');

var token = process.env.SLACK_TOKEN

var controller = Botkit.slackbot({
  // reconnect to Slack RTM when connection goes bad
  retry: Infinity,
  debug: false
})

// Assume single team mode if we have a SLACK_TOKEN
if (token) {
  console.log('Starting in single-team mode')
  controller.spawn({
    token: token
  }).startRTM(function (err, bot, payload) {
    if (err) {
      throw new Error(err)
    }

    console.log('Connected to Slack RTM')
  })
// Otherwise assume multi-team mode - setup beep boop resourcer connection
} else {
  console.log('Starting in Beep Boop multi-team mode')
  require('beepboop-botkit').start(controller, { debug: true })
}

// ===== Code part =====

// General stuff

controller.hears(['wer bist du', 'who are you', 'wie heißt du', 'wie hast du', 'wie heisst du', 'wer bistn du'], ['direct_message','direct_mention','mention'], function(bot, message) {

  bot.reply(message, 'Mein Name ist B.O.B. - kurz für Brainless Operating Bot.')
})


controller.on('bot_channel_join', function (bot, message) {
  bot.reply(message, 'Hello world!')
})

// Slackbot responses

controller.hears(['hi'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  bot.reply(message, 'Hello.')
})

// Testing

controller.hears('interactive', 'direct_message', function(bot, message) {

    bot.reply(message, {
        attachments:[
            {
                title: 'Do you want to interact with my buttons?',
                callback_id: '123',
                attachment_type: 'default',
                actions: [
                    {
                        "name":"yes",
                        "text": "Yes",
                        "value": "yes",
                        "type": "button",
                    },
                    {
                        "name":"no",
                        "text": "No",
                        "value": "no",
                        "type": "button",
                    }
                ]
            }
        ]
    });
});