const {
    MessageEmbed,
    Message
} = require('discord.js')
const botconfig = require("../../botconfig.json")
module.exports.run = (client, message, args) => {
    message.delete();
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let loveMsg = args.slice(1).join(" ");
    if (!loveMsg) return message.channel.send("Please provide a message.").then(msg => msg.delete(10000));

    let loveEmbed = new MessageEmbed()
        .setTitle('💌 You\'ve Recieved a Love Letter 💌')
        .setColor('#E75A70')
        .setThumbnail('https://cdn.discordapp.com/attachments/544697145664602132/673778637018759168/love-letter.png')
        .setDescription(`You've recieved a love letter from \`${message.author.tag}\` saying: \`${loveMsg}\`\n\n You can send them one back by doing ${client.prefix}loveletter <@${message.author.id}> with your own message ;)`)
        .setTimestamp()
        .setFooter(`${botconfig["bot_setup"].copyright}`);

    user.send(loveEmbed);
}
module.exports.help = {
    name: 'loveletter',
    aliases: ['lvlt'],
    description: 'Sends a love letter to ur crush or gf/bf',
    category: 'Miscellaneous',
}
module.exports.config = {
    disabled: false
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