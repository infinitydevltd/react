const {
    MessageEmbed
} = require("discord.js")

module.exports = (client, message) => {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
    // let chid = client.db.get(`delch_${message.guild.id}`)
    // let ch = client.channels.cache.get(chid)
    // if (!ch) return;
    // let embed = new MessageEmbed()
    //     .setColor("RED")
    //     .setAuthor(message.author.displayAvatarURL())
    //     .setDescription(`${message.author.tag} deleted a message in ${message.channel}\n\`${message.content.substring(0, 1300)}\``)
    //     .setFooter(client.config["bot_setup"].copyright)
    //     .setTimestamp()
    // if (message.image) return embed.setImage(message.attachments.first())
    // ch.send(embed)
}