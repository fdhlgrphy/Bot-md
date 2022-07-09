const axios = require("axios")

module.exports = {
name: "pantun",
alias: ["randompantun", "pantunlucu"],
category: "random",
isSpam: true,
isLimit: true,
async run({ msg, conn }, { prefix }) {
const { data } = await axios.get("https://api.lolhuman.xyz/api/random/pantun?apikey=mikasay")
var captnya = `*[ RANDOM PANTUN ]*\n\n${data.result}`
var copycap = `${data.result}`
              await conn.sendMessage(
				msg.from,
		{
               text: captnya,
                 footer: "© " + config.namebot + " • " + config.ownername,
					templateButtons: [
					    {index: 1, urlButton: {displayText: `Copy Here`, url: 'https://www.whatsapp.com/otp/copy/'+copycap}},
						{ quickReplyButton: { displayText: "🔍 Get Again", id: "#pantun" } },
					],
				},
				{ quoted: msg }
			)
			}
			}