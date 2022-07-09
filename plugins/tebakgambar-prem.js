let fetch = require('node-fetch')

let timeout = 180000
let poin = 50000
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambarp = conn.tebakgambarp ? conn.tebakgambarp : {}
  let id = m.chat
  if (id in conn.tebakgambarp) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambarp[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
  ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
    `.trim()
  conn.tebakgambarp[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgambar.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambarp[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambarp[id][0])
      delete conn.tebakgambarp[id]
    }, timeout)
  ]
}
handler.help = ['tebgamp']
handler.tags = ['premium']
handler.command = /^tebgamp/i
handler.premium = true
handler.limit = true
handler.group = true

module.exports = handler
