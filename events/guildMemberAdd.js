const moment = require("moment")
const {
    MessageEmbed
} = require("discord.js")
module.exports = (client, member) => {
    let ch = client.settings.get(message.guild.id, "config.welcomechannel")
    let c1 = member.guild.channels.cache.find(ch => ch.name === ch)
    let arole = client.settings.get(message.guild.id, "config.autorole.human")
    if (!member.user.bot) {
        if (arole) member.roles.add(arole)
    } else {
        let role = client.settings.get(message.guild.id, "config.autorole.bot")
        if (role) member.roles.add(role)
    }
    c1.send(new MessageEmbed().setDescription(`A member joined! **${member.user.tag}**\nCreated At: ${moment.utc(member.user.createdAt).format('LLLL')}`))
}