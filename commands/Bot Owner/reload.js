const {
    MessageEmbed,
    Message
} = require('discord.js')
const {
    readdirSync
} = require('fs');
const {
    join
} = require('path');
const botconfig = require("../../botconfig.json")
module.exports.run = (client, message, args) => {
    if (!args[0]) return message.channel.send("Please provide a command to reload!")
    const commandName = args[0].toLowerCase()
    if (!client.commands.get(commandName)) return message.channel.send("That command doesn't exist. Try again.")
    readdirSync(join(__dirname, '..')).forEach(f => {
        let files = readdirSync(join(__dirname, '..', f));
        if (files.includes(commandName + '.js')) {
            try {
                delete require.cache[require.resolve(`../${f}/${commandName}.js`)] // usage !reload <name>
                client.commands.delete(commandName)
                const pull = require(`../${f}/${commandName}.js`)
                client.commands.set(commandName, pull)
                return message.channel.send(`<:acheck:690968266574921759> Successfully reloaded **${commandName}**!`)
            } catch (e) {
                return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
            }
        }
    });
}
module.exports.help = {
    name: "reload",
    description: "Reloads a command",
    aliases: ["rcmd"],
    category: "Developer"
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: true,
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}