const {
    ChannelType
} = require("discord.js");

module.exports = async (interaction, client) => {

    if (!interaction.isButton()) return;

    switch (interaction.customId) {

        case "cargo_dono":

            await interaction.reply({
                content: "👑 Em breve será aberto o menu para selecionar o Cargo Dono.",
                ephemeral: true
            });

        break;

        case "cargo_mediador":

            await interaction.reply({
                content: "🛡️ Em breve será aberto o menu para selecionar o Cargo Mediador.",
                ephemeral: true
            });

        break;

        case "categoria_ap":

            await interaction.reply({
                content: "📂 Em breve será possível selecionar a categoria onde as AP serão criadas.",
                ephemeral: true
            });

        break;

        case "canal_filas":

            await interaction.reply({
                content: "📢 Em breve será possível selecionar o canal das filas.",
                ephemeral: true
            });

        break;

        case "canal_logs":

            await interaction.reply({
                content: "📜 Em breve será possível selecionar o canal de logs.",
                ephemeral: true
            });

        break;

        case "registro_pix":

            await interaction.reply({
                content: "💳 Em breve será possível registrar as chaves Pix dos mediadores.",
                ephemeral: true
            });

        break;

    }

};
