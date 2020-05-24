const {
    MessageEmbed,
    Message
} = require('discord.js')
const functions = require("../../functions/functions")
const botconfig = require("../../botconfig.json")
module.exports.run = (client, message, args) => {
    const page = message.guild.members.cache.filter(m => m.user.username.toLowerCase().includes(args[0].toLowerCase()).map(u => u.user.tag + '  |  ' + u.user.id))
    if (!page) return message.channel.send(`Sorry, i cant find a user with that name!`)
    return message.channel.send(new MessageEmbed()
        .setDescription(page.join("\n"))
        .setAuthor(`Results for: ${args[0]} in ${message.guild.name}`))
    // message.channel.send(client.user.displayAvatarURL())
}
module.exports.help = {
    name: "membersearch",
    description: "Searches for a member in a server",
    aliases: ["msearch"],
    category: "Miscellaneous"
}
module.exports.config = {
    disabled: false
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