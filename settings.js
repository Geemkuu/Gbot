//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: go_ask_your_dad" //ur yt chanel name
global.socialm = "GitHub: Geemkuu" //ur github or insta name
global.location = "Africa,Kenya,Nairobi" //ur location

//new
global.botname = '★彡ＮＯＮＳＥＮＳＥ 彡★' //ur bot name
global.ownernumber = '254794286079' //ur owner number
global.ownername =  '꧁༒☬gee☬༒꧂' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/DSQwxQR6Nww8cM5SDZbLNl"
global.themeemoji = '😂'
global.wm = "🇬 🇪 🇪 ."
global.botscript = 'https://github.com/Geemkuu/Cheems11' //script link
global.packname = "Sticker By"
global.author = "꧁༒☬gee☬༒꧂\n\n+254794286079"
global.creator = "254794286079@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254794286079"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v7' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
