const axios = require("axios")

module.exports = {
name: "memeindo",
alias: ["memeindo", "memerandom"],
category: "random",
isSpam: true,
isLimit: true, // kalo mau fiturnya pake limit
wait: true,
async run({ msg, conn }, { prefix }) {
	const buttons = [{ buttonId: "#memeindo", buttonText: { displayText: "Get Again" }, type: 1 }];
	const memeind = "https://api.lolhuman.xyz/api/meme/memeindo?apikey=mikasay"
const buttonMessage = {
			image: { url: memeind },
			caption: `ini memenya kak`,
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage, {quoted: msg});
}
}