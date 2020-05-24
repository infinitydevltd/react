const {
    MessageEmbed,
    Message
} = require('discord.js')

module.exports.run = (client, message, args) => {
    let channel = message.mentions.channels.first() || message.channel;
    let sniped = client.esnipes.get(message.channel.id)
    if (!sniped) return message.channel.send(`There is no recently updated message in this channel`)
    let embed = new MessageEmbed()
        .setColor(`DARK_RED`)
        .setTitle(`Edited Message in ${channel}`, message.guild.iconURL())
        .setDescription(`Message Author: ${sniped.author.tag}\nMessage Content Before: \`\`\`${sniped.oldcontent}\`\`\`\nMessage Content Now: \`\`\`${sniped.newcontent}\`\`\``)
    if (sniped.image) embed.setImage(sniped.image)
    message.channel.send(embed)
    // if (!sniped) message.channel.send(`No recently deleted messages`)
}
module.exports.help = {
    name: "esnipe",
    description: "Shows the recently edited message",
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