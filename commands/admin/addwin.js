const { adicionarVitoria } = require("../../utils/stats");
const { criarUsuario } = require("../../utils/perfil");

module.exports = {

    name: "addwin",

    async execute(message, args) {

        if (!message.member.permissions.has("Administrator")) {

            return message.reply("❌ Você não tem permissão para usar este comando.");

        }

        const membro = message.mentions.users.first();

        if (!membro) {

            return message.reply("❌ Marque um jogador.");

        }

        criarUsuario(

            membro.id,

            membro.username

        );

        adicionarVitoria(membro.id);

        message.reply({

            embeds: [

                {

                    color: 0x57F287,

                    title: "🏆 Vitória adicionada",

                    description:
`Jogador: ${membro}

✅ +1 Vitória

🪙 +1 Coin`

                }

            ]

        });

    }

};
