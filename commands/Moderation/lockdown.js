const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    // if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

    message.channel.overwritePermissions([{
        id: message.author.id,
        deny: ['SEND_MESSAGES'],
    }, ], 'Lockdown');
    message.channel.send(`Damnn, **${message.author.tag}** just locked the channel down. Don't worry, Admins will soon open the chat again so be patient.`);
}
module.exports.help = {
    name: 'lockdown',
    aliases: ['lockdown'],
    description: 'Locks a channel',
    category: 'Moderation',
}
module.exports.config = {
    disabled: false
}
module.exports.requirements = {
    clientPerms: ["MANAGE_CHANNELS"],
    userPerms: ["MANAGE_CHANNELS"],
    ownerOnly: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}