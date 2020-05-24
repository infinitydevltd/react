const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = (client, message, args) => {
    let nickedUser = message.mentions.members.first();
    let nickReason = args.slice(1).join(" ")
    if (!nickedUser) return message.reply("**No mentioned user.**").then(m => m.delete(5000));
    if (!nickReason) return message.reply("**Having no name is not a good name.**").then(m => m.delete(5000));
    nickedUser.setNickname(nickReason);
    message.channel.send(":white_check_mark: **changed** " + nickedUser + " **'s nickname**").then(m => m.delete(5000));
}
module.exports.help = {
    name: 'setnickname',
    aliases: ['setnick'],
    description: 'Sets the nickname of a user',
    category: 'Moderation',
}
module.exports.config = {
    disabled: false
}
module.exports.requirements = {
    clientPerms: ["MANAGE_NICKNAMES"],
    userPerms: ["MANAGE_NICKNAMES"],
    ownerOnly: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}