const {
    ActionRowBuilder,
    RoleSelectMenuBuilder
} = require("discord.js");

const db = require("../database/configDatabase");

module.exports = async (interaction, client) => {

    // Clique em botão
    if (interaction.isButton()) {

        if (interaction.customId === "cargo_dono") {

            const row = new ActionRowBuilder()
                .addComponents(

                    new RoleSelectMenuBuilder()
                        .setCustomId("selecionar_cargo_dono")
                        .setPlaceholder("Selecione o Cargo Dono")

                );

            return interaction.reply({

                content: "👑 Escolha o cargo de Dono.",

                components: [row],

                ephemeral: true

            });

        }

    }

    // Seleção de cargo
    if (interaction.isRoleSelectMenu()) {

        if (interaction.customId === "selecionar_cargo_dono") {

            const cargo = interaction.values[0];

            db.prepare(`
                INSERT INTO configuracoes(guild,cargo_dono)
                VALUES(?,?)
                ON CONFLICT(guild)
                DO UPDATE SET cargo_dono=excluded.cargo_dono
            `).run(

                interaction.guild.id,

                cargo

            );

            return interaction.update({

                content: "✅ Cargo Dono salvo com sucesso.",

                components: []

            });

        }

    }

};
