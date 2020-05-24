const {
    MessageEmbed,
    Message
} = require('discord.js')
module.exports.run = async (client, message, args) => {
    const newMessage = await message.channel.send("Are you sure you want shutdown the **entire** bot?");
    newMessage.react('👍').then(() => newMessage.react('👎'));

    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    newMessage.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        })
        .then(async collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '👍') {
                await message.channel.send("Bot is shutting down.");
                process.exit();
            } else {
                message.reply("Lets pretend that didn't happen.");
            }
        })
        .catch(collected => {
            message.reply('You reacted with neither a thumbs up, nor a thumbs down.');
        });
}
module.exports.help = {
    name: 'shutdown',
    aliases: ['exit'],
    description: 'Shutdowns the bot',
    category: 'Developer',
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: true
}
module.exports.config = {
    disabled: false
}
module.exports.limits = {
    rateLimit: 2,
    cooldown: 3e4
}