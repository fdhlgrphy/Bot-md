const hikki = require("hikki-me")

module.exports = {
name: "walpeper",
alias: ["randomgalery", "wall"],
category: "random",
async run({ msg, conn }, { prefix, q }) {
	const meme = await hikki.anime.animeWallpaper();
	const buttons = [{ buttonId: "#meme", buttonText: { displayText: "Get Again" }, type: 1 }];
const buttonMessage = {
			image: { url: meme.url },
			caption: `tested`,
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage, {quoted: msg});
	},
};
