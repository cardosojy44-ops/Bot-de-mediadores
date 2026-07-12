require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Partials
} = require("discord.js");

const commandHandler = require("./handlers/commandHandler");
const interactionCreate = require("./events/interactionCreate");
const readyEvent = require("./events/ready");
const messageCreate = require("./events/messageCreate");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel
    ]
});

commandHandler(client);

client.once("ready", async () => {
    readyEvent(client);
});

client.on("interactionCreate", async (interaction) => {
    interactionCreate(interaction, client);
});

client.on("messageCreate", async (message) => {
    messageCreate(message, client);
});

client.login(process.env.TOKEN);
