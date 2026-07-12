const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    PermissionFlagsBits
} = require("discord.js");

const filaDB = require("../../database/filaDatabase");

module.exports = {

    name: "criarfila",

    async execute(message, args) {

        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {

            return message.reply("❌ Apenas administradores podem criar filas.");

        }

        const valor = args[0];

        const modo = args.slice(1).join(" ");

        if (!valor || !modo) {

            return message.reply(
                "Use:\n.criarfila 5 Mobile\n\nExemplo:\n.criarfila 10 Emulador"
            );

        }

        const embed = new EmbedBuilder()

            .setColor("#2F3136")

            .setTitle("🎮 FILA DE X1")

            .setDescription(
`💰 **Valor:** R$ ${valor}

🎮 **Modo:** ${modo}

👤 Jogador 1:
Aguardando...

👤 Jogador 2:
Aguardando...

📊 Status:
🟢 Aguardando jogadores.`
            )

            .setFooter({

                text: "Bot de Mediação"

            });

        const botoes = new ActionRowBuilder()

            .addComponents(

                new ButtonBuilder()

                    .setCustomId("entrar_fila")

                    .setLabel("Entrar")

                    .setEmoji("✅")

                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()

                    .setCustomId("sair_fila")

                    .setLabel("Sair")

                    .setEmoji("❌")

                    .setStyle(ButtonStyle.Danger)

            );

        const msg = await message.channel.send({

            embeds: [embed],

            components: [botoes]

        });

        filaDB.prepare(`
            INSERT INTO filas(
                guild,
                canal,
                mensagem,
                valor,
                modo,
                jogador1,
                jogador2,
                status
            )
            VALUES(?,?,?,?,?,?,?,?)
        `).run(

            message.guild.id,

            message.channel.id,

            msg.id,

            valor,

            modo,

            "",

            "",

            "aguardando"

        );

        message.reply("✅ Fila criada com sucesso.");

    }

};
