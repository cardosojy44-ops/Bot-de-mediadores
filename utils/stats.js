const db = require("../database/database");

function adicionarVitoria(userId) {

    db.prepare(`
        UPDATE usuarios
        SET
            vitorias = vitorias + 1,
            coins = coins + 1,
            partidas = partidas + 1
        WHERE id = ?
    `).run(userId);

}

function adicionarDerrota(userId) {

    db.prepare(`
        UPDATE usuarios
        SET
            derrotas = derrotas + 1,
            partidas = partidas + 1
        WHERE id = ?
    `).run(userId);

}

function removerVitoria(userId){

    db.prepare(`
        UPDATE usuarios
        SET
            vitorias = CASE
                WHEN vitorias > 0 THEN vitorias - 1
                ELSE 0
            END
        WHERE id = ?
    `).run(userId);

}

function removerDerrota(userId){

    db.prepare(`
        UPDATE usuarios
        SET
            derrotas = CASE
                WHEN derrotas > 0 THEN derrotas - 1
                ELSE 0
            END
        WHERE id = ?
    `).run(userId);

}

function adicionarCoins(userId, quantidade){

    db.prepare(`
        UPDATE usuarios
        SET coins = coins + ?
        WHERE id = ?
    `).run(quantidade, userId);

}

function removerCoins(userId, quantidade){

    db.prepare(`
        UPDATE usuarios
        SET coins =
        CASE
            WHEN coins >= ?
            THEN coins - ?
            ELSE 0
        END
        WHERE id = ?
    `).run(
        quantidade,
        quantidade,
        userId
    );

}

module.exports = {

    adicionarVitoria,

    adicionarDerrota,

    removerVitoria,

    removerDerrota,

    adicionarCoins,

    removerCoins

};
