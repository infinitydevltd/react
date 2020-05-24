const {
  MessageEmbed,
  Message
} = require('discord.js')
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  let aroleHuman = await client.settings.get(message.guild.id, "autorole.human")
  let role1 = await message.guild.roles.cache.get(aroleHuman)
  let aroleHum1an = await client.settings.get(message.guild.id, "autorole.bot")
  let role12 = await message.guild.roles.cache.get(aroleHum1an)
  let wch = await client.settings.get(message.guild.id, "config.welcomechannel")
  let ch1 = await message.guild.channels.cache.find(ch => ch.name === wch)
  let prefix = await client.settings.get(message.guild.id, "config.prefix")
  if (prefix == null) prefix = client.prefix;
  if (role1 == null) role1 = 'Not Found in Database or Not Set';
  if (role12 == null) role12 = 'Not Found in Database or Not Set';
  if (ch1 == null) ch1 = 'Not Found in Database or Not Set';
  let embed = new MessageEmbed()
    .setColor("BLUE")
    .setThumbnail(message.guild.iconURL())
    .setTitle(`${message.guild.name}'s Config`)
    .addFields({
      name: 'Autorole Human',
      value: role1,
      inline: false
    }, {
      name: 'Autorole Bot',
      value: role12,
      inline: false
    }, {
      name: 'Welcome/Leave Channel',
      value: ch1,
      inline: false
    }, {
      name: 'Prefix',
      value: prefix,
      inline: false
    })
    .setFooter(client.config["bot_setup"].copyright, client.user.displayAvatarURL())
  message.channel.send(embed)
}
module.exports.help = {
  name: "config",
  description: "",
  aliases: ["serverconfig", "cnfg"],
  category: "Settings"
}

module.exports.requirements = {
  clientPerms: [],
  userPerms: [],
  ownerOnly: false,
}
module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}