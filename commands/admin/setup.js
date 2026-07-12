const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    PermissionFlagsBits
} = require("discord.js");

module.exports = {
    name: "setup",

    async execute(message) {

        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {

            return message.reply({
                content: "❌ Apenas administradores podem utilizar este comando."
            });

        }

        const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle("⚙️ Painel de Configuração")
            .setDescription(
`Bem-vindo ao painel de configuração.

Selecione uma opção abaixo para configurar o bot.

👑 Cargo Dono
🛡️ Cargo Mediador
📂 Categoria das AP
📢 Canal das Filas
📜 Canal de Logs
💳 Registro de Pix
🏆 Painéis
💰 Valores das Filas`
            );

        const row1 = new ActionRowBuilder()
            .addComponents(

                new ButtonBuilder()
                    .setCustomId("cargo_dono")
                    .setLabel("Cargo Dono")
                    .setEmoji("👑")
                    .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                    .setCustomId("cargo_mediador")
                    .setLabel("Cargo Mediador")
                    .setEmoji("🛡️")
                    .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                    .setCustomId("categoria_ap")
                    .setLabel("Categoria AP")
                    .setEmoji("📂")
                    .setStyle(ButtonStyle.Secondary)

            );

        const row2 = new ActionRowBuilder()
            .addComponents(

                new ButtonBuilder()
                    .setCustomId("canal_filas")
                    .setLabel("Canal Filas")
                    .setEmoji("📢")
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId("canal_logs")
                    .setLabel("Canal Logs")
                    .setEmoji("📜")
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId("registro_pix")
                    .setLabel("Registro Pix")
                    .setEmoji("💳")
                    .setStyle(ButtonStyle.Danger)

            );

        await message.reply({

            embeds: [embed],

            components: [

                row1,

                row2

            ]

        });

    }

};
