let express = require("express");
let app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const {
  token,
  prefix
} = require("./config")
const {
  Client,
  Collection,
  MessageEmbed
} = require("discord.js")
const discord = require("discord.js")
const client = new Client({
  disableEveryone: true
});
const botconfig = require("./botconfig.json")

const fetch = require("node-fetch");
const Endb = require('endb');
client.settings = new Endb({
  uri: 'sqlite://dbreact.sqlite',
  table: 'settings'
});
client.config = botconfig;
client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Map();
client.esnipes = new Map();
client.limits = new Map();
const body = {
  users: client.users.cache.size, // <client>.users.size
  servers: client.users.cache.size
};

fetch("https://abstractlist.com/api/bots/694214787227451492/stats", {
    method: "POST",
    headers: {
      Authorization: "TJCbKIHHMfgrS4le9NKdupxPfrGhTPnc"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => console.log(json));

const commands = require("./structures/command")
commands.run(client)

const events = require("./structures/event")
events.run(client)
build();

function build() {
  client.login(token)
}