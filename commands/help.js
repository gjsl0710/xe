const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const {prefix} = require('../config.json')
module.exports = {
    name: "도와줘",
    description: "The help command, what do you expect?",
    usage: "",
    aliases: ["help", "도움말", "명령어", "h",],

    async run (client, message, args){

        const page1 = new Discord.MessageEmbed()
        .setTitle('PAGE 1')
        .addField(`${prefix}도와줘`, '너굴봇 도움말을 표시합니다')
        .addField(`${prefix}코로나`, '코로나 현황을 알려줍니다')
        .addField(`${prefix}청소`, '메시지를 삭제합니다')
        .addField(`${prefix}날씨`, '해당 지역의 날씨를 알려줍니다')
        .setColor('#FFFF')
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        .setTimestamp()

        const page2 = new Discord.MessageEmbed()
        .setTitle('PAGE 2')
        .addField(`${prefix}핑`, '서버와 봇과의 핑을 출력합니다')
        .setColor('#FFFF')
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        .setTimestamp()

        const pages = [
                page1,
                page2,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '240000';

        pagination(message, pages, emojiList, timeout)
    }
}