const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    // if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

    message.channel.overwritePermissions(message.guild.id, [{
        SEND_MESSAGES: null
    }]).then(() => {
        message.channel.send('Lockdown lifted <a:balancecheck:556017659419033653> WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:');
        delete client.lockit[message.channel.id];
    }).catch(error => {
        console.log(error);
    })
}
module.exports.help = {
    name: 'unlock',
    aliases: ['unlock'],
    description: 'Unlocks a channel',
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