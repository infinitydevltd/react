const { MessageEmbed } = require("discord.js")

module.exports = (client, oldMessage, newMessage) => {
    client.esnipes.set(oldMessage.channel.id, {
        oldcontent: oldMessage.content,
        author: oldMessage.author,
        newcontent: newMessage.content
    })
}