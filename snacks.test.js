const {
    getInitials,
    createSlug,
    average,
    isPalindrome
} = require("./snacks.js");

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