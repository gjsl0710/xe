const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const token = process.env.token

const { readdirSync } = require('fs');
const { join } = require('path');

client.commands = new Discord.Collection();

const commandFile = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith("js"));

for (const file of commandFile) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("error", console.error);

const sleep = (ms) => {return new Promise(resolve=>{setTimeout(resolve,ms)})}
client.on('ready', async() => {   
    while(1) {
      client.user.setActivity(`너굴아 도와줘`)
      await sleep(4000)
      client.user.setActivity(`너굴봇.`)
      await sleep(4000)
      client.user.setActivity(`드래곤XE 이모티콘 전용봇`)
      await sleep(4000)
      client.user.setActivity(`접두사 : 너굴아 | Prefix : 너굴아`)
      await sleep(4000)
    } 
  })
client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
      client.commands.get(command).run(client, message, args);
    } catch (error) {
      console.error(error);
    }
  }
})

client.login(token);