const {
  MessageEmbed,
  Message
} = require("discord.js");
module.exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || client.users.cache.get(args[0]);
  let reason = args.join(" ")
  let embed = new MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${member.user.tag} has been banned for \`${reason}\``)
  message.channel.send(embed)
  if (member.bannable) return embed.setDescription(`**ERROR**\n${member.user.tag} cant be banned by me`)
  member.ban({
    reason: reason
  })
};
module.exports.help = {
  name: "ban",
  description: 'Bans a user from the server',
  category: "Moderation"
};
module.exports.config = {
  disabled: false
}
module.exports.requirements = {
  clientPerms: ["BAN_MEMBERS"],
  userPerms: ["BAN_MEMBERS"],
  ownerOnly: false,
}
module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}