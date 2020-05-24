const {
    MessageEmbed,
    Message
} = require('discord.js')
const {
    NovelCovid
} = require(`novelcovid`)
const botconfig = require("../../botconfig.json")
module.exports.run = (client, message, args) => {
    const body = new NovelCovid();
    console.log(body)
    if (args[0] == 'all') {
        let embed = new MessageEmbed()
            .setColor(`DARK_RED`)
            .setAuthor(`Covid Stats for all countries`)
            .setDescription(`Confirmed Cases: ${body.all.cases}\nDeaths: ${body.all.deaths}\nRecovered: ${body.all.recovered}`)
        message.channel.send(embed)
    }
    if (args[0] == 'country' || args[0] == 'c') {
        let rs = body.countries(args.slice(1).join(" "))
        let embed = new MessageEmbed()
            .setColor(`DARK_RED`)
            .setAuthor(`Covid Stats for ${args.slice(1).join(" ")}`)
            .setDescription(`Confirmed Cases: ${body.countries(args.slice(1).join(" ").cases)}\nDeaths: ${rs.deaths}\nRecovered: ${rs.recovered}`)
        message.channel.send(embed)
    }
}
module.exports.help = {
    name: 'covid',
    aliases: ['covid'],
    description: '',
    category: 'Miscellaneous',
}
module.exports.config = {
    disabled: true
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