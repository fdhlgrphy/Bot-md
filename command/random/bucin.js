const axios = require("axios")

module.exports = {
name: "bucin",
alias: ["randombucin", "katabucin"],
category: "random",
cooldown: 5,
isSpam: true,
isLimit: true,
async run({ msg, conn }, { prefix }) {
const { data } = await axios.get("https://api.lolhuman.xyz/api/random/bucin?apikey=mikasay")
var captnya = `*[ RANDOM BUCIN ]*\n\n${data.result}`
var copycap = `${data.result}`
/*const buttons = [{ buttonId: "#bucin", buttonText: { displayText: "Get Again 🔍" }, type: 1 }];
const buttonMessage = {
	        text: captnya,
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage, {quoted: msg});
}
}*/
              await conn.sendMessage(
				msg.from,
		{
               text: captnya,
                 footer: "© " + config.namebot + " • " + config.ownername,
					templateButtons: [
					    {index: 1, urlButton: {displayText: `Copy Here`, url: 'https://www.whatsapp.com/otp/copy/'+copycap}},
						{ quickReplyButton: { displayText: "🔍 Get Again", id: "#bucin" } },
					],
				},
				{ quoted: msg }
			)
			}
			}