const {
  MessageEmbed,
  Message
} = require("discord.js");
module.exports.run = async (client, message, args) => {
  const cmd = args.join(" ").split(" | ");
  if (cmd < 1)
    return message.channel.send(
      '**You did not provide any text to embed!** Example Usage: `This is my title | This is my description.`Remember, you must add the "|" mark in between.'
    );
  let emb = new MessageEmbed()
    .setColor("AQUA")
    .setTitle(cmd[0])
    .setDescription(cmd[1]);

  message.channel.send(emb);
  if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    message.delete();
  }
};
module.exports.help = {
  name: "embed",
  description: 'Sends an embed with the title and description separated by "|" ',
  category: "Moderation"
};
module.exports.config = {
  disabled: false
}
module.exports.requirements = {
  clientPerms: [],
  userPerms: ["MANAGE_MESSAGES"],
  ownerOnly: false,
}
module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}