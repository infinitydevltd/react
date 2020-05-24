const {
    MessageEmbed,
    Message
} = require('discord.js')
const botconfig = require("../../botconfig.json")
module.exports.run = (client, message, args) => {
    let text = args.slice(1).join(" ");
    if (args[0] !== 'encode' || args[0] !== 'decode') return message.channel.send(`**ERROR**\nPlease use the correct usage of the command! Example: \`${client.prefix}base64 encode/decode text\``)
    if (args[0] == 'encode') {
        message.channel.send(new MessageEmbed()
            .setDescription(Buffer.from(text).toString('base64')))
    } else if (args[0] == 'decode') {
        message.channel.send(new MessageEmbed()
            .setDescription(Buffer.from(text, 'base64').toString('ascii')))
    }
}
module.exports.help = {
    name: 'base64',
    aliases: ['base64'],
    description: '',
    category: 'Miscellaneous',
}
module.exports.config = {
    disabled: true
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}