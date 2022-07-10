const free = 1000000000
const prem = 1000000000
const moneyfree = 1000000000
const moneyprem = 1000000000
const timeout = 6000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 6000
  if (new Date - global.db.data.users[m.sender].lastclaim < 6000) throw `Anda sudah mengklaim, klaim cheat hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
       // global.db.data.users[m.sender].potion += 5
        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money`, m)
        global.db.data.users[m.sender].lastclaim = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Cheat sudah bisa di gunakan kembali`, m)
					}, timeout)
    } 
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0
handler.exp = 0
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
