const moment = require("moment")
const {
    MessageEmbed
} = require("discord.js")
module.exports = (client, member) => {
    let ch = client.settings.get(message.guild.id, "config.welcomechannel")
    let c1 = member.guild.channels.cache.find(ch => ch.name === ch)
    let arole = client.settings.get(message.guild.id, "config.autorole.human")
    c1.send(new MessageEmbed().setDescription(`A member left! **${member.user.tag}**\nJoined At: ${moment.utc(member.joinedAt).format('LLLL')}`))
}