const {
  MessageEmbed
} = require('discord.js')
const db = require("quick.db")

module.exports.run = (client, message, args) => {
  let channel = message.mentions.roles.first();
  message.client.settings.set(message.guild.id, `autorole.human`)
  message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`Set the autorole to ${channel.name}`))

}
module.exports.help = {
  name: "autorole",
  description: "",
  aliases: ["arole"],
  category: "Settings"
}

module.exports.requirements = {
  clientPerms: ["MANAGE_ROLES"],
  userPerms: ["MANAGE_GUILD"],
  ownerOnly: false,
}

module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}