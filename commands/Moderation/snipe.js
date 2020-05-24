const {
    MessageEmbed,
    Message
} = require('discord.js')

module.exports.run = (client, message, args) => {
    let channel = message.mentions.channels.first() || message.channel;
    let sniped = client.snipes.get(message.channel.id)
    if (!sniped) return message.channel.send(`There is no recently deleted message in this channel`)
    let embed = new MessageEmbed()
        .setColor(`DARK_RED`)
        .setTitle(`Deleted Message in ${channel}`)
        .setFooter(client.config["bot_setup"].copyright)
        .setDescription(`Message Author: ${sniped.author.tag}\nMessage Content: \`\`\`${sniped.content.substring(0, 1900)}\`\`\``)
    if (sniped.image) embed.setImage(sniped.image)
    message.channel.send(embed)
}
module.exports.help = {
    name: "snipe",
    description: "Shows the recently deleted message or image",
    aliases: [],
    category: "Moderation"
}
module.exports.config = {
    disabled: false
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: ["MANAGE_MESSAGES"],
    ownerOnly: false,
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}