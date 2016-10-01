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
function multi_res(res) {
  return res[Math.floor(Math.random() * res.length)];
}

controller.hears(['wer bist du', 'who are you', 'wie heißt du', 'wie hast du', 'wie heisst du', 'wer bistn du'], ['direct_message','direct_mention','mention'], function(bot, message) {

  bot.reply(message, 'Mein Name ist B.O.B. - kurz für Brainless Operating Bot.')
})

controller.on('bot_channel_join', function (bot, message) {
  bot.reply(message, 'Hello world!')
})

// Slackbot responses

controller.hears(['hi'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Hello1', 'Hello2', 'Hello3'];
    
  bot.reply(message, multi_res(responses))
})

// Testing

