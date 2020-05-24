const {
    MessageEmbed
} = require("discord.js")
module.exports.run = (client, message) => {
    message.channel.send(new MessageEmbed().setColor("RANDOM").setFooter(client.config["bot_setup"].copyright).setDescription(`:ping_pong: Ping Pong! API Latency is \`${client.ws.ping}\`ms.`))
}

module.exports.help = {
    name: "ping",
    description: "Checks the ping",
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
    rateLimit: 3,
    cooldown: 3e4
}