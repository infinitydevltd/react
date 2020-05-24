const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    let bug = args.join(" ")
    let embed = new MessageEmbed()
        .setDescription(bug)
        .setAuthor(`${message.author.tag} reported a bug in ${message.guild.name} Server`)
        .setTimestamp()
        .setFooter(client.config["bot_setup"].copyright)
    client.channels.cache.get('675834730352082967').send(embed)
}
module.exports.help = {
    name: 'bug',
    aliases: ['bugg'],
    description: 'Reports a bug in our server',
    category: 'Support Server',
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