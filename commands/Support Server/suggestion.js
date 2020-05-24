const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    let bug = args.join(" ")
    let embed = new MessageEmbed()
        .setDescription(`\`${bug}\``)
        .setAuthor(`${message.author.tag} reported a suggestion in ${message.guild.name}`)
        .setTimestamp()
        .setFooter(client.config["bot_setup"].copyright)
    client.channels.cache.get('676082259807174656').send(embed)
}
module.exports.help = {
    name: 'suggestion',
    aliases: ['suggest'],
    description: 'Reports a suggestion in our server',
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