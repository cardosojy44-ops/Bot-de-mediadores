const config = require("../config");

module.exports = async (message, client) => {

    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/);

    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {

        command.execute(message, args, client);

    } catch (err) {

        console.log(err);

        message.reply("❌ Ocorreu um erro ao executar este comando.");

    }

};
