// Snack 1
function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "");
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`;
}

// Snack 2-4-6
function createSlug(stringa) {
    if (!stringa) {
        throw new Error("Titolo non valido")
    }
    return stringa.toLowerCase().replaceAll(" ", "-");
}

// Snack 3
function average(numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

// Snack 5
function isPalindrome(parola) {
    const parolaTrim = parola.trim();
    const parolaInversa = parolaTrim.split("").reverse().join("");
    return parolaTrim === parolaInversa;
}


// EXPORT
module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}