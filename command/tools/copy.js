const axios = require("axios")

module.exports = {
name: "copybutton",
alias: ["cpy", "copy"],
category: "tools",
isSpam: true,
isLimit: true, // kalo mau fiturnya pake limit
wait: true,
async run({ msg, conn }, { prefix, q }) {
	var copynye = `tesyes`
const menuButa = [
{index: 1, urlButton: {displayText: `ini display`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}},
]
await conn.sendMessage(msg.from, { text: `ini captionya`, templateButtons: menuButa, footer: `FdhlGrphy` })
}
}