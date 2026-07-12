const { ActivityType } = require("discord.js");

module.exports = async (client) => {

    console.log("======================================");
    console.log(" BOT DE MEDIADORES ONLINE ");
    console.log("======================================");
    console.log(`Bot: ${client.user.tag}`);
    console.log(`Servidores: ${client.guilds.cache.size}`);
    console.log("======================================");

    client.user.setPresence({

        status: "online",

        activities: [

            {

                name: "🏆 Mediando partidas de X1",

                type: ActivityType.Watching

            }

        ]

    });

};
