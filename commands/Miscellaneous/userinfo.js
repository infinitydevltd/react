const {
    MessageEmbed,
    Message
} = require('discord.js')
const moment = require("moment")
module.exports.run = (client, message, args) => {
    function resolveMember(member) {
        if (!member) return null;
        return message.guild.members.cache.get(member) || message.guild.members.cache.find(m => {
            let match = member.match(/<@!?(\d{17,19})>/);
            if (match && m.id === match[1]) return true;
            return m.displayName.toLowerCase().includes(member.toLowerCase()) || m.user.username.toLowerCase().includes(member.toLowerCase());
        });
    }
    let member = resolveMember(args[0]) || message.member;
    let embed = new MessageEmbed()
        .setColor(member.displayHexColor)
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(`${member.user.tag}'s info`)
        .addField(`Username`, member.user.username, true)
        .addField(`ID`, member.user.id, true)
        .addField(`Tag`, member.user.tag, true)
        .addField(`User Bot`, member.user.bot ? "Yes" : "No", true)
        .addField(`User Created`, moment.utc(member.user.createdAt).format("LLLL"), true)
        .addField(`User Joined`, moment.utc(member.joinedAt).format("LLLL"), true)
        .addField(`Highest Role`, member.roles.highest.name, true)
        .addField(`User Boosted:`, member.premiumSince || "Not Boosted", true)
        .addField(`User Bannable:`, member.bannable ? "Yes" : "No")
        .addField(`User Kickable:`, member.kickable ? "Yes" : "No")
        .addField(`User Status`, member.presence.status.slice(0, 1).toUpperCase() + member.presence.status.slice(1), true)
        .addField(`Roles: (${member.roles.cache.size - 1})`, member.roles.cache.filter(f => f.name !== '@everyone').map(x => x.name).join(", ") || "None", true)
    message.channel.send(embed)
}
module.exports.help = {
    name: "userinfo",
    description: "Gives some user info",
    aliases: ["ui"],
    category: "Miscellaneous"
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