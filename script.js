function convertToRoman() {
    const number = parseInt(document.getElementById("number").value);
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i][1]) {
            result += romanNumerals[i][0];
            number -= romanNumerals[i][1];
        }
    }

    document.getElementById("result").innerText = result.toUpperCase();
}