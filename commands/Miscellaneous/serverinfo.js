const {
    MessageEmbed,
    Message
} = require('discord.js')
const m = require('moment')
module.exports.run = (client, message, args) => {
    let roles = message.guild.roles.cache.filter(r => r.name !== '@everyone').sort((a, b) => b.position - a.position ? 1 : -1).first(20).map(r => r.name).join(', ');
    // let emojisstatic = `${message.guild.emojis.first(20).filter(e => !e.animated).map(x => x).join(' ') || 'None'}`;
    if (message.guild.roles.size > 20)
        roles += `... 20 / ${message.guild.roles.size - 1}`;
    let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .setImage(message.guild.bannerURL({
            size: 2048
        }))
        .addField(`Server Name:`, message.guild.name, true)
        .addField(`Server ID:`, message.guild.id, true)
        .addField(`Server Created:`, m.utc(message.guild.createdAt).format('LLLL'), true)
        .addField(`Server Owner:`, client.users.cache.get(message.guild.ownerID).tag, true)
        .addField(`Server Verification Level:`, message.guild.verificationLevel, true)
        .addField(`Server Boosts:`, message.guild.premiumSubscriptionCount, true)
        .addField("Server Total / Humans / Bots:", `${message.guild.members.cache.size.toLocaleString()} / ${message.guild.members.cache.filter(member => !member.user.bot).size.toLocaleString()} /  ${message.guild.members.cache.filter(member => member.user.bot).size.toLocaleString()}`, true)
        .addField(`Server Channels: Text / Voice:`, `${message.guild.channels.cache.filter(f => f.type == 'text').size} / ${message.guild.channels.cache.filter(f => f.type == 'voice').size}`, true)
        .addField("Server Region:", `${message.guild.region}`, true)
        .addField(`Server Tier:`, message.guild.premiumTier, true)
        .addField(`Server Partnered:`, `${message.guild.partnered ? "Yes" : "No"}`, true)
        .addField(`Server Vanity URL:`, `${message.guild.vanityURLCode ? message.guild.vanityURLCode : "None"}`, true)
        .addField(`Server Roles: ( ${message.guild.roles.cache.size - 1} )`, roles)
    // .addField(`Server Features:`, `\`\`\`${message.guild.features[0] ? message.guild.features.join(", ") : "No Features Achieved!"}\`\`\``);
    message.channel.send(embed)
}
module.exports.help = {
    name: 'serverinfo',
    aliases: ["si"],
    description: 'Shows the serverinfo',
    category: 'Miscellaneous',
}
module.exports.config = {
    disabled: false
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false,
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}