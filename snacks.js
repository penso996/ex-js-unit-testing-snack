// Snack 1
function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "");
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`;
}

// Snack 2
function createSlug(stringa) {
    return stringa.toLowerCase();
}

// Snack 3
function average(numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}


// EXPORT
module.exports = {
    getInitials,
    createSlug,
    average
}