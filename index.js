require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Partials
} = require("discord.js");

const commandHandler = require("./handlers/commandHandler");

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

const readyEvent = require("./events/ready");

client.once("ready", async () => {

    readyEvent(client);

});

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isChatInputCommand()) return;

});

client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

});

client.login(process.env.TOKEN);
