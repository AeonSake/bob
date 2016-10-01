// ==============================
// ========== SETTINGS ==========
// ==============================

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

// ===============================
// ========== Responses ==========
// ===============================

// ===== General stuff =====

function multi_res(res) {
  return res[Math.floor(Math.random() * res.length)];
}

controller.hears(['wer bist du', 'who are you', 'wie heißt du', 'wie hast du', 'wie heisst du', 'wer bistn du'], ['direct_message','direct_mention','mention'], function(bot, message) {

  bot.reply(message, 'Mein Name ist B.O.B. - kurz für Brainless Operating Bot.')
})

controller.on('bot_channel_join', function (bot, message) {
  bot.reply(message, 'Hello world!')
})

// ===== Names =====

controller.hears(['torben'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Verwende den Shadestep!'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['marco'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Wer ist dieser randy, kick den mal!', 'Du randy oida :D', 'Polo!'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['dave'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Disco-Dave! *dance*', 'Rave-Dave! :the_horns:'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['david'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  bot.reply(message, 'Des hast DAVE!')
})

controller.hears(['dope'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Double-Doping!'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['joh'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Johsiris m0thafukkah!'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['twain'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['1 gegen 1 du randy?'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['chris'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Immer dieser Obstesser ^^'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['fabio'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Was isch des?'];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(['lisa'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Keeeeeeekseeee!', 'Kekse Kekse Kekse!!', 'Wo is die Keks-Mama?', "Jetzt reicht's dann wieder mal Lisa."];
    
  bot.reply(message, multi_res(responses))
})

// ===== Other =====

controller.hears(['hi'], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = ['Hello1', 'Hello2', 'Hello3'];
    
  bot.reply(message, multi_res(responses))
})

// ===== Testing =====
// Syntax:
/*
controller.hears([''], ['ambient', 'direct_message','direct_mention','mention'], function (bot, message) {
  var responses = [''];
    
  bot.reply(message, multi_res(responses))
})
*/




