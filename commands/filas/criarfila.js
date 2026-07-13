const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
} = require("discord.js");

const filaDB = require("../../database/filaDatabase");

module.exports = {

name: "criarfila",

async execute(message, args){

if(!message.member.permissions.has("Administrator"))
return message.reply("❌ Apenas administradores.");

const preco = args[0];

if(!preco)
return message.reply(".criarfila <valor>");

const embed = new EmbedBuilder()

.setColor("#5865F2")

.setTitle("1x1 | Fila")

.setDescription(
`» **Formato:** \`1x1 Mobile\`

💰 **Preço:** \`R$ ${preco},00\`

👑 **Jogadores**

🧊 **Gelo Infinito**

1.

2.

────────────

🧊 **Gelo Normal**

1.

2.`
)

.setThumbnail(message.guild.iconURL())

.setFooter({

text:"Aguardando jogadores..."

});

const row = new ActionRowBuilder()

.addComponents(

new ButtonBuilder()

.setCustomId("gelo_infinito")

.setLabel("Gelo infinito")

.setEmoji("🧊")

.setStyle(ButtonStyle.Success),

new ButtonBuilder()

.setCustomId("gelo_normal")

.setLabel("Gelo normal")

.setEmoji("🧊")

.setStyle(ButtonStyle.Success),

new ButtonBuilder()

.setCustomId("sair_fila")

.setLabel("Sair")

.setEmoji("↩️")

.setStyle(ButtonStyle.Danger)

);

const painel = await message.channel.send({

embeds:[embed],

components:[row]

});

filaDB.prepare(`

INSERT INTO filas(

guild,

canal,

mensagem,

valor,

gelo_infinito_1,

gelo_infinito_2,

gelo_normal_1,

gelo_normal_2

)

VALUES(?,?,?,?,?,?,?,?)

`).run(

message.guild.id,

message.channel.id,

painel.id,

preco,

null,

null,

null,

null

);

message.reply("✅ Painel criado.");

}

};
