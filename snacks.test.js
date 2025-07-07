const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require("./snacks.js");

const posts = [
    { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" },
    { id: 2, title: "React Hooks", slug: "react-hooks" }
]

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
    expect(getInitials("andrea penso")).toBe("AP");
    expect(getInitials("beatrice  penso")).toBe("BP")
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("Titolo CON Maiuscole")).toBe("titolo-con-maiuscole");
});

// Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([5, 15])).toBe(10);
    expect(average([10, 20, 30, 40, 50])).toBe(30);
});

// Snack 4
test("La funzione createSlug sostituisce gli spazi con '-'", () => {
    expect(createSlug("Titolo MOLTO bello")).toBe("titolo-molto-bello")
});

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("anna  ")).toBeTruthy();
    expect(isPalindrome("boolean")).toBeFalsy();
});

// Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido");
    expect(() => createSlug(null)).toThrow("Titolo non valido");
});

// Snack 7
test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" });
    expect(findPostById(posts, 3)).toBe(null);
    expect(() => findPostById(posts, "ciao")).toThrow("ciao non è un id valido");
    expect(() => findPostById([34, 67], 2)).toThrow("L'array posts non è valido");
});