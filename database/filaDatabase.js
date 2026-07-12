const Database = require("better-sqlite3");

const db = new Database("./database/filas.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS filas (

id INTEGER PRIMARY KEY AUTOINCREMENT,

guild TEXT,

canal TEXT,

mensagem TEXT,

valor TEXT,

modo TEXT,

jogador1 TEXT,

jogador2 TEXT,

status TEXT

)
`).run();

module.exports = db;
