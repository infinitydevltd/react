const {
    MessageEmbed,
    Message
} = require('discord.js')
const {
    stripIndents
} = require("common-tags")
module.exports.run = (client, message, args) => {
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return stripIndents `**⏰ I have been online for: ⏰**
            **> ⏰ Days:** **${days.padStart(1, '0')}** ⏳, 
            **> ⏰ Hours:** **${hrs.padStart(2, '0')}** ⏳, 
            **> ⏰ Minutes:** **${min.padStart(2, '0')}** ⏳, 
            **> ⏰ Seconds:** **${sec.padStart(2, '0')}** ⏳. `

    }

    message.channel.send(new MessageEmbed().setColor(`White`).setDescription(`${duration(client.uptime)}`))
}
module.exports.help = {
    name: 'uptime',
    aliases: ['uptime'],
    description: 'Shows the uptime of the bot',
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