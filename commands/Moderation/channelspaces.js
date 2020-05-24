const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    message.guild.channels.cache.forEach(x => x.setName(x.name.replace(/-/g, "\u2009")))
    message.channel.send("Set the guild channels name with spaces")
}
module.exports.help = {
    name: 'spaces',
    aliases: ['channelspaces'],
    description: 'Sets a space to channel name where it has "-"',
    category: 'Moderation',
}
module.exports.requirements = {
    clientPerms: ["MANAGE_CHANNELS"],
    userPerms: ["MANAGE_CHANNELS"],
    ownerOnly: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}