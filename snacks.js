// Snack 1
function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "");
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`;
}

// Snack 2 / 4
function createSlug(stringa) {
    return stringa.toLowerCase().replaceAll(" ", "-");
}

// Snack 3
function average(numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

// Snack 5
function isPalindrome(parola) {
    const parolaInversa = parola.split("").reverse().join("");
    return parola === parolaInversa;
}


// EXPORT
module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}