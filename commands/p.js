const db = require("../database/database");

module.exports = {
    name: "p",

    async execute(message) {

        let usuario = db.prepare(
            "SELECT * FROM usuarios WHERE id = ?"
        ).get(message.author.id);

        if (!usuario) {

            db.prepare(`
                INSERT INTO usuarios
                (id,nome,vitorias,derrotas,coins,partidas)
                VALUES
                (?,?,?,?,?,?)
            `).run(
                message.author.id,
                message.author.username,
                0,
                0,
                0,
                0
            );

            usuario = db.prepare(
                "SELECT * FROM usuarios WHERE id = ?"
            ).get(message.author.id);

        }

        const partidas = usuario.partidas;
        const vitorias = usuario.vitorias;

        let winrate = 0;

        if (partidas > 0) {
            winrate = ((vitorias / partidas) * 100).toFixed(1);
        }

        await message.reply({

            embeds: [

                {
                    color: 0x00ff99,

                    title: "👤 Perfil do Jogador",

                    thumbnail: {
                        url: message.author.displayAvatarURL()
                    },

                    fields: [

                        {
                            name: "🏆 Vitórias",
                            value: `${usuario.vitorias}`,
                            inline: true
                        },

                        {
                            name: "❌ Derrotas",
                            value: `${usuario.derrotas}`,
                            inline: true
                        },

                        {
                            name: "🪙 Coins",
                            value: `${usuario.coins}`,
                            inline: true
                        },

                        {
                            name: "🎮 Partidas",
                            value: `${usuario.partidas}`,
                            inline: true
                        },

                        {
                            name: "📊 Win Rate",
                            value: `${winrate}%`,
                            inline: true
                        }

                    ],

                    footer: {

                        text: "Bot de Mediação"

                    }

                }

            ]

        });

    }

};
