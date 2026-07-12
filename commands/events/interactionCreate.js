const {
    ActionRowBuilder,
    RoleSelectMenuBuilder
} = require("discord.js");

const db = require("../database/configDatabase");

module.exports = async (interaction, client) => {

    // ===========================
    // BOTÕES
    // ===========================

    if (interaction.isButton()) {

        // Cargo Dono
        if (interaction.customId === "cargo_dono") {

            const row = new ActionRowBuilder()
                .addComponents(
                    new RoleSelectMenuBuilder()
                        .setCustomId("selecionar_cargo_dono")
                        .setPlaceholder("Selecione o Cargo Dono")
                );

            return interaction.reply({
                content: "👑 Escolha o Cargo Dono.",
                components: [row],
                ephemeral: true
            });

        }

        // Cargo Mediador
        if (interaction.customId === "cargo_mediador") {

            const row = new ActionRowBuilder()
                .addComponents(
                    new RoleSelectMenuBuilder()
                        .setCustomId("selecionar_cargo_mediador")
                        .setPlaceholder("Selecione o Cargo Mediador")
                );

            return interaction.reply({
                content: "🛡️ Escolha o Cargo Mediador.",
                components: [row],
                ephemeral: true
            });

        }

    }

    // ===========================
    // SELEÇÃO DOS CARGOS
    // ===========================

    if (interaction.isRoleSelectMenu()) {

        // Cargo Dono
        if (interaction.customId === "selecionar_cargo_dono") {

            const cargo = interaction.values[0];

            db.prepare(`
                INSERT INTO configuracoes(guild,cargo_dono)
                VALUES(?,?)
                ON CONFLICT(guild)
                DO UPDATE SET cargo_dono = excluded.cargo_dono
            `).run(
                interaction.guild.id,
                cargo
            );

            return interaction.update({
                content: "✅ Cargo Dono salvo com sucesso!",
                components: []
            });

        }

        // Cargo Mediador
        if (interaction.customId === "selecionar_cargo_mediador") {

            const cargo = interaction.values[0];

            db.prepare(`
                INSERT INTO configuracoes(guild,cargo_mediador)
                VALUES(?,?)
                ON CONFLICT(guild)
                DO UPDATE SET cargo_mediador = excluded.cargo_mediador
            `).run(
                interaction.guild.id,
                cargo
            );

            return interaction.update({
                content: "✅ Cargo Mediador salvo com sucesso!",
                components: []
            });

        }

    }

};
