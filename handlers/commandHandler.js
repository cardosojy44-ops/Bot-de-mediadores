const fs = require("fs");
const path = require("path");

module.exports = (client) => {

    client.commands = new Map();

    const commandsPath = path.join(__dirname, "..", "commands");

    if (!fs.existsSync(commandsPath)) {
        fs.mkdirSync(commandsPath, { recursive: true });
    }

    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {

        const command = require(path.join(commandsPath, file));

        if (!command.name) continue;

        client.commands.set(command.name, command);

        console.log(`✔ Comando carregado: ${command.name}`);

    }

};
