const axios = require("axios");
const { sticker } = require("../../lib/convert");
const { modStick, createExif } = require("../../lib/exif2");
const fs = require("fs");

module.exports = {
	name: "attp",
	alias: ["attp, texttosticker"],
	category: "converter",
	desc: "Converter text to sticker gif",
	wait: true,
	async run({ msg, conn }, { q }) {
		const { quoted, from, type } = msg;

const content = JSON.stringify(quoted);
		const isMedia = type === "imageMessage" || type === "videoMessage";
		const isQImg = type === "extendedTextMessage" && content.includes("imageMessage");
		const isQVid = type === "extendedTextMessage" && content.includes("videoMessage");
		const isQDoc = type === "extendedTextMessage" && content.includes("documentMessage");
		const isQStic = type === "extendedTextMessage" && content.includes("stickerMessage");
		const packInfo = {
			packname: config.packInfo.packname,
			author: config.packInfo.author,
		};

		let buffer, stickerBuff;
				(isMedia && msg.message.videoMessage.fileLength < 2 << 20) ||
				(isQVid && quoted.message.videoMessage.fileLength < 2 << 20)
				video = await conn.getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=mikasay&text=${encodeURIComponent(q)}`)
                stickerBuff = await sticker(video, { isVideo: true, withPackInfo: true, packInfo, cmdType: "1" });
				await conn.sendMessage(from, { sticker: stickerBuff }, { quoted: msg });
				}
				}