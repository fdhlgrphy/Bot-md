const axios = require("axios")

module.exports = {
name: "quotes",
alias: ["randomquotes", "quote"],
category: "random",
isSpam: true,
isLimit: true, // kalo mau fiturnya pake limit
async run({ msg, conn }, { prefix }) {
const { data } = await axios.get("https://api.lolhuman.xyz/api/random/quotes?apikey=mikasay")
var captnya = `*[ RANDOM QUOTES ]*\n\n${data.result.quote}\n~ ${data.result.by}`
const buttons = [{ buttonId: "#quotes", buttonText: { displayText: "Get Again 🔍" }, type: 1 }];
const buttonMessage = {
	        text: captnya,
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage, {quoted: msg});
}
}