const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    function resolveMember(member) {
        if (!member) return null;
        return message.guild.members.cache.get(member) || message.guild.members.cache.find(m => {
            let match = member.match(/<@!?(\d{17,19})>/);
            if (match && m.id === match[1]) return true;
            return m.displayName.toLowerCase().includes(member.toLowerCase()) || m.user.username.toLowerCase().includes(member.toLowerCase());
        });
    }
    // let reason = args.join(" ")
    let member = message.mentions.members.first() || resolveMember(args[0]) || message.guild.members.cache.get(args[0])
    // if (!member) return message.reply(`Please mention a member`)
    let role = message.guild.roles.cache.find(r => r.name === args[1]) || message.mentions.roles.first();
    let reason = args.slice(2).join(" ")
    if (!role) return message.reply(`Please mention a role`)
    let embed = new MessageEmbed()
        .setColor(`GREEN`)
        .addField(`Moderation:`, `Add Role`)
        .addField(`Executor:`, message.author.tag)
        .addField(`Added role`, role)
        .addField(`Member`, member.user.tag)
    message.channel.send(embed)
    // message.channel.send(`This command is disabled due to alot of bugs! We are so sorry... :(`)
    member.roles.add(role)
}
module.exports.help = {
    name: "addrole",
    description: "Adds a role",
    aliases: [],
    category: "Moderation"
}
module.exports.config = {
    disabled: false
}
module.exports.requirements = {
    clientPerms: ["MANAGE_ROLES"],
    userPerms: ["MANAGE_ROLES"],
    ownerOnly: false,
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}