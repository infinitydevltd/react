const {
    MessageEmbed,
    Message
} = require('discord.js')
const randomDog = require('random.dog.js');
const randomDogApi = randomDog.api();
module.exports.run = (client, message, args) => {
    randomDogApi.getDog().then((dog) => message.channel.send(new MessageEmbed().setColor("RANDOM").setImage(dog.url).setFooter(client.config["bot_setup"].copyright)))
}
module.exports.help = {
    name: 'dog',
    aliases: ['dog', 'doggy'],
    description: '',
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