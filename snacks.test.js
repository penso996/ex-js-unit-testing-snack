const {
    getInitials,
    createSlug
} = require("./snacks.js");

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
    expect(getInitials("andrea penso")).toBe("AP");
    expect(getInitials("beatrice  penso")).toBe("BP")
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("Titolo CON Maiuscole")).toBe("titolo con maiuscole");

});