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

// Snack 7
function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`${id} non è un id valido`)
    }
    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("L'array posts non è valido")
        }
    })
    return posts.find(p => p.id === id) || null;
}


// EXPORT
module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}