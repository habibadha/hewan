let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), 'βΏππ₯πππ§π’π₯β’Hz22\nSubscribe : https://www.youtube.com/channel/hz22yt', wm, 'NEXT', '.cevanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler