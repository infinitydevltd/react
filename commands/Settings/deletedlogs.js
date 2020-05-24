const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    let channel = message.mentions.channels.first();
    client.db.set(`delch_${message.guild.id}`, channel.id)
    message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`Set the message delete logs channel to ${channel}`))
}
module.exports.help = {
    name: 'deletedlogs',
    aliases: ['sdelch'],
    description: 'Sets the deleted message logs',
    category: 'Settings',
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}
module.exports.config = {
    disabled: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}