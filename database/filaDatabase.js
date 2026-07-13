const Database = require("better-sqlite3");

const db = new Database("./database/filas.db");

db.exec(`

CREATE TABLE IF NOT EXISTS filas (

id INTEGER PRIMARY KEY AUTOINCREMENT,

guild TEXT NOT NULL,

canal TEXT NOT NULL,

mensagem TEXT NOT NULL,

valor TEXT NOT NULL,

modo TEXT DEFAULT '1x1 Mobile',

status TEXT DEFAULT 'aberta',

gelo_infinito_1 TEXT,
gelo_infinito_2 TEXT,

gelo_normal_1 TEXT,
gelo_normal_2 TEXT,

criada_em DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);

module.exports = db;
