const axios = require("axios")

module.exports = {
name: "bcm",
alias: ["rndm", "rndmbcn"],
category: "random",
isSpam: true,
isLimit: true,
async run({ msg, conn }, { prefix, MessageType }) {
const { data } = await axios.get("https://api.lolhuman.xyz/api/random/bucin?apikey=mikasay")
var captnya = `*[ RANDOM BUCIN ]*\n\n${data.result}`


let rows = [
{ title: 'indonesia', description: 'Id-id', rowld: "0" },
{ title: 'enggris', description: 'en-en', rowld: "1" },
{ title: 'japanese', description: 'jp-jp', rowld: "2" }
]
await conn.sendListMessage(msg.from, {buttonText: 'View List', description: 'List of language'}, "berikut bahasa yg tersedia", rows)
    }
    }