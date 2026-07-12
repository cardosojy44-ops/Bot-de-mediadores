const Database = require("better-sqlite3");

const db = new Database("database.sqlite");

db.exec(`

CREATE TABLE IF NOT EXISTS usuarios (

id TEXT PRIMARY KEY,
nome TEXT,
vitorias INTEGER DEFAULT 0,
derrotas INTEGER DEFAULT 0,
coins INTEGER DEFAULT 0,
partidas INTEGER DEFAULT 0

);

CREATE TABLE IF NOT EXISTS configuracoes (

id INTEGER PRIMARY KEY AUTOINCREMENT,
cargo_dono TEXT,
cargo_mediador TEXT,
canal_filas TEXT,
canal_logs TEXT,
canal_pagamentos TEXT,
categoria_partidas TEXT,
pix_chave TEXT,
pix_nome TEXT,
pix_cidade TEXT

);

CREATE TABLE IF NOT EXISTS partidas (

id TEXT PRIMARY KEY,
jogador1 TEXT,
jogador2 TEXT,
mediador TEXT,
valor TEXT,
modo TEXT,
status TEXT,
vencedor TEXT,
perdedor TEXT,
data TEXT

);

`);

module.exports = db;
