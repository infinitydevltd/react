const {
  MessageEmbed,
  Message
} = require("discord.js");
const {
  inspect
} = require("util");
const db = require("quick.db");
const {
  VultrexHaste
} = require("vultrex.haste")
const haste = new VultrexHaste({
  url: "https://hasteb.in"
})
const botconfig = require("../../botconfig.json")
module.exports.run = async (client, message, args) => {
  if (!args) throw new EvalError(`Please provide a code to eval`)
  try {
    let start = process.hrtime();
    let output = eval(args.join(" "));
    let diff = process.hrtime(start);
    if (typeof output !== "string") output = inspect(output, {
      depth: 2
    })
    let inputembed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        `:inbox_tray: Input:\n\`\`\`js\n${args.join(" ")}\`\`\`\n:outbox_tray: Output:\n**Executed in ${
        diff[0] > 0 ? `${diff[0]}s` : ""
        }${diff[1] / 1e6}ms**\n\`\`\`javascript\n${output.length > 1400 ? await haste.post(output) : output}\n\`\`\`\nType Of:\`\`\`${typeof output}\n\`\`\``, {
          maxLength: 2048
        }
      );
    message.channel.send(inputembed);
  } catch (e) {
    return message.channel.send(`**ERROR**\nCouldn't evaluate this code\n\`\`\`${e.message}\`\`\``)
  }
};
module.exports.help = {
  name: "eval",
  description: "Evaluates a code",
  aliases: ["e"],
  category: "Developer"
};
module.exports.requirements = {
  clientPerms: [],
  userPerms: [],
  ownerOnly: true,
};
module.exports.limits = {
  rateLimit: 2,
  cooldown: 3e4
}
/*
try {
    let toEval = args.join(" ");
    let evaluated = inspect(eval(toEval, { depth: 1 }));
    if (message.content.includes("token")) {
      evaluated = "You mother fucking son of a bitch, i wont give my token";
    }
    let hrStart = process.hrtime();
    let hrDiff;
    hrDiff = process.hrtime(hrStart);
    let inputembed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        `:inbox_tray: Input:\n\`\`\`js\n${toEval}\`\`\`\n:outbox_tray: Output:\n**Executed in ${
        hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""
        }${hrDiff[1] / 1000000}ms.**\n\`\`\`javascript\n${evaluated.substring(
          0,
          1400
        )}\n\`\`\`\nType Of:\`\`\`${typeof evaluated}\n\`\`\``,
        { maxLength: 2048 }
      );
    message.channel.send(inputembed);
  } catch (e) {
    return message.channel.send(`Error while evaluating: \`${e.message}\``);
  }
*/