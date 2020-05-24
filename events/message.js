const {
  owners,
  prefix
} = require("../config");
const {
  MessageEmbed
} = require("discord.js");

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let prefix = await client.settings.get(message.guild.id, 'config.prefix')
  if (!prefix) prefix = client.prefix;
  if (message.content == '<@702405431863017502>') return message.channel.send(`My prefix here is: \`${prefix}\``)
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  let commandfile =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  // if (commandfile) commandfile.run(client, message, args)
  if (commandfile.requirements == null) return;
  if (
    commandfile.requirements.ownerOnly &&
    !owners.includes(message.author.id)
  ) {
    return message.channel.send(
      "Sorry, you must be the bot owner to use this command"
    );
  }
  let result = missingPerms(message.member, commandfile.requirements.userPerms);

  if (
    commandfile.requirements.userPerms &&
    !message.member.permissions.has(commandfile.requirements.userPerms) &&
    !owners.includes(message.author.id)
  )
    return message.channel.send(
      `Sorry, you must have ${result} perms to run this command`
    );
  result = missingPerms(message.guild.me, commandfile.requirements.clientPerms); // `Sorry, you must have ${result} perms to run this command`
  if (
    commandfile.requirements.clientPerms &&
    !message.guild.me.permissions.has(commandfile.requirements.clientPerms) &&
    !owners.includes(message.author.id)
  )
    return message.channel.send(
      `Sorry, i must have ${result} perms to run this command`
    )
  commandfile.run(client, message, args);
};
const missingPerms = (member, perms) => {
  const missingPerms = member.permissions
    .missing(perms)
    .map(str => `\`${str.replace(/_/g, " ")}\``);

  return missingPerms.length > 1 ?
    `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` :
    missingPerms[0];
};