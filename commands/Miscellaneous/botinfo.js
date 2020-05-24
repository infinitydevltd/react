const {
    MessageEmbed,
    Message
} = require('discord.js')
const moment = require("moment")
module.exports.run = (client, message, args) => {
    function duration(ms) {
        const times = {
            day: Math.floor((ms / (1000 * 60 * 60 * 24))),
            hour: Math.floor((ms / (1000 * 60 * 60)) % 24),
            minute: Math.floor((ms / (1000 * 60)) % 60),
            second: Math.floor((ms / 1000) % 60),
            week: Math.floor((ms / (1000 * 60 * 60 * 24 * 7)))
        };

        let string = '';

        for (const [key, value] of Object.entries(times)) {
            if (value > 0) string += `${value} ${key}${value > 1 ? 's' : ''}`
        }
        return `${string}`
    }
    let embed = new MessageEmbed()
        .addFields({
            name: "Name & Tag",
            value: client.user.tag,
            inline: true
        }, {
            name: "ID",
            value: client.user.id,
            inline: true
        }, {
            name: "Users",
            value: client.users.cache.size,
            inline: true
        }, {
            name: "Servers",
            value: client.guilds.cache.size,
            inline: true
        }, {
            name: "Channels",
            value: client.channels.cache.size,
            inline: true
        }, {
            name: "Memory Usage",
            value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mb`,
            inline: true
        }, {
            name: "Developer",
            value: client.config["bot_setup"].owners,
            inline: true
        }, {
            name: "Uptime",
            value: duration(client.uptime),
            inline: true
        }, {
            name: "Discord.JS",
            value: require("discord.js").version,
            inline: true
        })
        .setColor("BLUE")
        .setFooter(client.config["bot_setup"].copyright)
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
}
module.exports.help = {
    name: 'botinfo',
    aliases: ['bi', "stats"],
    description: 'Shows bot info',
    category: 'Miscellaneous',
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}
module.exports.config = {
    disabled: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}