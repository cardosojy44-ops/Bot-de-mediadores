const db = require("../database/database");

function criarUsuario(id, nome) {

    const existe = db.prepare(
        "SELECT * FROM usuarios WHERE id = ?"
    ).get(id);

    if (existe) return existe;

    db.prepare(`
        INSERT INTO usuarios(
            id,
            nome,
            vitorias,
            derrotas,
            coins,
            partidas
        )
        VALUES(?,?,?,?,?,?)
    `).run(
        id,
        nome,
        0,
        0,
        0,
        0
    );

    return db.prepare(
        "SELECT * FROM usuarios WHERE id = ?"
    ).get(id);

}

function buscarUsuario(id){

    return db.prepare(
        "SELECT * FROM usuarios WHERE id = ?"
    ).get(id);

}

module.exports = {

    criarUsuario,

    buscarUsuario

};
