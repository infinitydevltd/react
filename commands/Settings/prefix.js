const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    let channel = args[0];
    message.client.settings.set(message.guild.id, channel, "config.prefix")
    message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`Set the prefix to ${channel}`))
}
module.exports.help = {
    name: 'prefix',
    aliases: [''],
    description: 'Sets the bot prefix',
    category: 'Settings',
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: ["MANAGE_GUILD"],
    ownerOnly: false
}
module.exports.config = {
    disabled: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}