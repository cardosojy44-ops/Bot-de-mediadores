require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Partials
} = require("discord.js");

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

client.once("ready", () => {
    console.log("================================");
    console.log(" BOT DE MEDIAÇÃO ONLINE ");
    console.log("================================");
    console.log(`Logado como: ${client.user.tag}`);
    console.log(`Servidores: ${client.guilds.cache.size}`);
    console.log("================================");

    client.user.setPresence({
        activities: [
            {
                name: "Gerenciando filas",
                type: 3
            }
        ],
        status: "online"
    });
});

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isChatInputCommand()) return;

});

client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

});

client.login(process.env.TOKEN);
