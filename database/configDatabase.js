const Database = require("better-sqlite3");

const db = new Database("./database/config.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS configuracoes (

guild TEXT PRIMARY KEY,

cargo_dono TEXT,

cargo_mediador TEXT,

categoria_ap TEXT,

canal_filas TEXT,

canal_logs TEXT,

canal_pix TEXT

)
`).run();

module.exports = db;
