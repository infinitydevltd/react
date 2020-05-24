const {
  MessageEmbed,
  Message
} = require("discord.js");
module.exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || client.users.cache.get(args[0]);
  let reason = args.join(" ")
  let embed = new MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${member.user.tag} has been kicked for \`${reason}\``)
  if (member.kickable) return embed.setDescription(`**ERROR**\n${member.user.tag} cant be kicked by me`)
  member.kick({
    reason: reason
  })
  message.channel.send(embed);
};
module.exports.help = {
  name: "kick",
  description: 'Kicks a user from the server',
  category: "Moderation"
}
module.exports.config = {
  disabled: false
}
module.exports.requirements = {
  clientPerms: ["KICK_MEMBERS"],
  userPerms: ["KICK_MEMBERS"],
  ownerOnly: false,
}
module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}