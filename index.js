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

controller.hears(["(\\bwer bist du\\b)", "(\\bwho are you\\b)", "(\\bwie heißt du\\b)", "(\\bwie hast du\\b)", "(\\bwie heisst du\\b)", "(\\bwer bistn du\\b)"], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {

  bot.reply(message, "Mein Name ist B.O.B. - kurz für Brainless Operating Bot.")
})

controller.on('bot_channel_join', function (bot, message) {
  bot.reply(message, "Hello world!")
})

controller.on('user_channel_join', function (bot, message) {
  bot.reply(message, "Hallo und willkommen in unserer Selbsthilfegruppe.")
})

// ===== Names =====

controller.hears(["(\\btorben\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Verwende den Shadestep!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bmarco\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Wer ist dieser randy, kick den mal!", "Du randy oida :D", "Polo!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bdave\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Disco-Dave! *dance*", "Rave-Dave! :the_horns::skin-tone-2:"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bdavid\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "Des hast DAVE!")
})

controller.hears(["(\\bdope\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Double-Doping!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bjoh\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Johsiris m0thafukkah!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\btwain\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["1 gegen 1 du randy?"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bchris\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Immer dieser Obstesser ^^"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bfabio\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Was isch des?"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\blisa\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Keeeeeeekseeee!", "Kekse Kekse Kekse!!", "Wo is die Keks-Mama?", "Jetzt reicht's dann wieder mal Lisa."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\balex\\b)", "(\\bdraco\\b)", "(\\bdracofix\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["LEEEEEEROYYYYY JENKINSSS!!!"];
    
  bot.reply(message, multi_res(responses))
})

// ===== Other =====

controller.hears(["(\\bgg\\b)", "(\\bgege\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Halts maul!", "Fresse!", "Klappe!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bfail\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Du bistn fail!", "So wie dein Gesicht!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bf(.*)k you\\b)", "(\\bf(.*)k u\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["OK, but I'll be on the top.", "I love you, too.", "Not if I fuck you first.", "Can I at least get a kiss first?", "No thanks.", "Buy me dinner first.", "Not tonight, darling. I have a headache.", "I have a boyfriend."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\btschüss\\b)", "(\\btschau\\b)", "(\\bbis später\\b)", "(\\bbis gleich\\b)", "(\\bbis glei\\b)", "(\\bbis bald\\b)", "(\\bcya\\b)", "(\\bcu\\b)", "(\\bbye\\b)", "(\\bbyebye\\b)", "(\\bbb\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["bubai!", "bussi bussi <3", "Na endlich...", "Tüdelü!", "Heute ist nicht alle Tage; ich komm wieder, keine Frage!", "xoxo"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bhi\\b)", "(\\bheyo\\b)", "(\\bh(.)llo\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["What's up?!", "Wadap bitches!", "Was geht?", "'Sup?", "Hot diggity.", "Hola chica!", "Whatsssssssss uuuuuuuuuuup?!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\basshole\\b)", "(\\bidiot\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["I'm sorry you feel that way.", "Dad? Is that you?", "That's what your girlfriend told me about you last night.", "U wot m8?!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bspam\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Du bist spam!", "Spam spam spam spam spam spam spam spam spam spam!", "Ich zeig dir gleich spam!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bwtf\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["(╯°□°）╯︵ ┻━┻", "(┛◉Д◉)┛彡┻━┻", "(╯ರ ~ ರ）╯︵ ┻━┻", "(ノಠ益ಠ)ノ彡┻━┻", "┻━┻ ︵﻿ ¯\(ツ)/¯ ︵ ┻━┻", "(ノ ゜Д゜)ノ ︵ ┻━┻"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bomg\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["NO WAY!", "Really?", "Nicht dein ernst!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bschere-stein-papier\\b)", "(\\bschere stein papier\\b)", "(\\bschere, stein, papier\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Schere", "Stein", "Papier"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bwürfeln\\b)", "(\\bwürfln\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["1", "2", "3", "4", "5", "6"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bkopf-zahl\\b)", "(\\bkopf oder zahl\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Kopf", "Zahl"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\b:shit:\\b)", "(\\b:hankey:\\b)", "(\\b:poop:\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = [":scream:", ":fire:", ":bomb:"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\btwitch\\b)", "(\\btwitchtv\\b)", "(\\btwitch.tv\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Wer ist dieser TwitchTV?"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bgeil\\b)", "(\\bcool\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Definitiv.", "Voi.", "Oba richtig.", "Läuft.", "Danke ich wurde so geboren.", "Wenn du meinst."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bbob is(.*) scheisse\\b)", "(\\bbob is(.*) scheiße\\b)", "(\\bbob is(.*) kacke\\b)", "(\\bbob is(.*) mist\\b)", "(\\bbob sucks\\b)", "(\\bbot sucks\\b)", "(\\bscheiss bob\\b)", "(\\bscheiß bob\\b)", "(\\bscheiss bot\\b)", "(\\bscheiß bot\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Du auch.", "Schnauze sonst Beule!", "Bist du bescheuert oder was?!", "Willst du Probleme?!", "Klappe sonst installier ich dir 10 neue Toolbars.", "Ich hab mehr Antworten parat als du Gehirnzellen besitzt.", "Ruhe sonst rappelt's im Karton!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bspoiler\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = [":construction::construction::warning::construction::construction:"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\b:euro:\\b)", "(\\b:dollar:\\b)", "(\\b:yen:\\b)", "(\\b:pound:\\b)", "(\\b:moneybag:\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Tanz du Luder!", "Ka-Ching!", "Money money money!", "Make it rain!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bwie spät ist es\\b)", "(\\bwie spät is\\b)", "(\\bwie spod is\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Zeit zum Uhr kaufen.", "Zeit für ein Bier.", "Genau so spät wie gestern um die selbe Uhrzeit.", "42.", "Sehr.", "Viel zu spät.", "watch.exe hat einen Fehler festgestellt und wurde beendet.", "Hammer Time!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bmoin\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Alter ich schlaf noch!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bkeks(.*)\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Hat jemand Lisa gesagt?", "Komm zur dunklen Seite!", "Nom nom nom...", "Ich will, ich will, ich will!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bk\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["...iss mei ass.", "k? k what? The letter before l, the letter after j? Did you know that in jk, k stands for kidding? So your reply is kidding? Or k as in potassium? Do you need some special k in breakfast? k as in i can k/o you? Can i knock you out and feed you to hungry sharks? Sharks has k in it."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bnespresso\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["What else?"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bpedo\\b)", "(\\bpedobär\\b)", "(\\bpedobear\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["ʕ•ᴥ•ʔ"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bdance\\b)", "(\\brobot\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["┌( ಠ_ಠ)┘", "└( ಠ_ಠ)┐", "└( ಠ_ಠ)┘", "┌( ಠ_ಠ)┐"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bdei(.*) ernst\\b)", "(\\bernsth(.)ft\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["I'm always serious ಠ_ಠ"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bbooty\\b)", "(\\barsch\\b)", "(\\bass\\b)", "(\\bboobs\\b)", "(\\bbrüste\\b)", "(\\btitten\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Awwww yisss!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bparty hard\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Es muss eskalieren!!!", "Hyper hyper!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bwas isch des\\b)", "(\\bwer isch des\\b)", "(\\bwo isch des\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Was fragst du mich das?!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bhacker\\b)", "(\\bhacks\\b)", "(\\bhack\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Du bist einfach nur schlecht.", "Lern hald besser zu spielen.", "Too good for you.", "Schnauze, du Lusche!", "Try harder."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bzu groß\\b)", "(\\bgigantisch\\b)", "(\\bso l(.)ng\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["That's what she said."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\blos gehts\\b)", "(\\blos geht's\\b)", "(\\blets go\\b)", "(\\blet's go\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Let's get ready to rrrrrrrumbleee!!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bruhe!\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["JETZT MAL ALLE DIE KLAPPE HALTEN!", "Wenn der Muffin spricht, schweigen die Krümel.", "Niemals.", "Glaubst du, du kannst hier einfach so was sagen?", "Wer glaubst du eigentlich wer du bist?!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\balles klar\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Komplett bescheuert.", "Ach echt?"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bwird scho wieda\\b)", "(\\bwird scho(.*) wieder\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Ich glaub nicht.", "Dafür ist es zu spät.", "Da ist schon alles verloren."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bhahaha\\b)", "(\\bhihihi\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Lach nicht so behindert.", "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA...Fresse."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bhow much is the fish\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Jetzt nur € 8,99 das Kilo!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bsei leise\\b)", "(\\bsei ruhig\\b)", "(\\bhalt die klappe\\b)", "(\\bhalt die fresse\\b)", "(\\bhör auf\\b)", "(\\bshut up\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Niemals.", "Make me.", "Heul doch."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bfix\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Fix dich selbst!", "Draco?", "Nix is fix."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bdunkel\\b)", "(\\bdunkl\\b)", "(\\bdüster\\b)", "(\\bfinster\\b)", "(\\bfinsta\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["So wie deine Zukunft."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bloot\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["LOOOOOOOT!!!"];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bswag\\b)", "(\\byolo\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Hat die örtliche Irrenanstalt schon wieder Ausgang?", "Wie behindert bist du eigentlich?", "Besorg dir ein neues Hirn, deins ist kaputt.", "Du Opfer.", "RTL2 hat angerufen, nicht mal die wollen dich.", "Bei dir herrscht auch geistige Windstille oder?", "Ach...dumm wie 3 Meter Weldweg.", "Dein Horizont ist auch eindimensional oder?", "Achtung! Hier ist jemand mit hirntechnischer Minderausstattung unterwegs!", "Noch so ein Vakuum-Denker..."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bhilfe\\b)", "(\\bhelp\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Was gibt's?", "Der automatische Hilferuf wurde eingeleitet. Bitte bleiben Sie ruhig und warten Sie bis Hilfe eintrifft.", "Soll ich die netten Herren in den weißen Mänteln holen?", "Für dich nicht.", "Der Lebenslegastheniker benötigt mal wieder Unterstützung."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bw(.)s is(.*) mi(.) di(.)\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Da bin ich mir auch nicht ganz sicher.", "Scheint was ernstes zu sein.", "Da kann nur noch der Psychiater helfen.", "Am besten nicht hinhören.", "Einfach ignorieren."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bchallenge\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Für dich ist auch das Aufstehen eine metale Herausforderung."];
    
  bot.reply(message, multi_res(responses))
})

controller.hears(["(\\bbob\\b)"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = ["Für dich immer noch Herr Bob.", "Wadap dumbass?", "Was willst du jetzt schon wieder?!", "Lass mich in Ruhe.", "Sprich mich nicht an.", "Du hast kein Recht meinen Namen zu benutzen."];
    
  bot.reply(message, multi_res(responses))
})

// ===== Testing =====
// Syntax:
/*
controller.hears(["\\b\\b"], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
  var responses = [""];
    
  bot.reply(message, multi_res(responses))
})
*/




