const { MessageEmbed, Message } = require('discord.js')
const db = require("quick.db")

module.exports.run = (client, message, args) => {
  let text = args.join(" ")
  db.set(`ltext_${message.guild.id}`, text)
  message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`Set the leave text to **${text}**`))

}
module.exports.help = {
  name: "leavetext",
  description: "Sets the text when a member leaves",
  aliases: ["ltxt"],
  category: "Settings"
}

module.exports.requirements = {
  clientPerms: [],
  userPerms: ["MANAGE_GUILD"],
  ownerOnly: false,
}
module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}