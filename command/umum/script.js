module.exports = {
name: "script",
alias: ["sc", "scbot"],
category: "umum",
isSpam: false,
isLimit: false, 
wait: false,
async run({ msg, conn }, { prefix }) {
let str = `sorry this script is private! contact the owner to get another script.

maaf script ini pribadi! hubungi pemilik untuk mendapatkan lain lain.`
		await conn.sendMessage(
				msg.from,
		{
			image: await conn.getBuffer(config.thumb),
			caption: str,
					footer: "© " + config.namebot + " • " + config.ownername,
					templateButtons: [
						{ urlButton: { displayText: "Instagram", url: "https://Instagram/fdhlgrphy" } },
						{ urlButton: { displayText: "YouTube", url: "https://youtube.com/FadhilGraphy" } },
						{ quickReplyButton: { displayText: "👤 Owner Bot", id: "#owner" } },
						{ quickReplyButton: { displayText: "📋 Go To Menu", id: "#menu" } },
					],
				},
				{ quoted: msg }
			);
}
}