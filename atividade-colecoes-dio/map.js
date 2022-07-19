function getAdmin(map) {
    let administradores = [];

    for ([key, value] of map) {
        if (value === "Admin") {
            administradores.push(key);
        }
    }
    return administradores
}

const membros = new Map()
membros.set('João', 'User');
membros.set('Maria', 'User');
membros.set('Tacio', 'Admin');
membros.set('Tecio', 'Admin');
console.log(membros)
console.log(getAdmin(membros));