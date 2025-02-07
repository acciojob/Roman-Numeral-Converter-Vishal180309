document.getElementById('convert-button').addEventListener('click', function() {
    let inputNumber = parseInt(document.getElementById('input-number').value);
    let result = convertToRomanNumeral(inputNumber);

    document.getElementById('result').innerHTML = 'Roman numeral: ' + result;
});

function convertToRomanNumeral(number) {
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

    return result.toUpperCase();
}