function convertToRoman(num) {
    if (num < 0 || num > 100000) return "Invalid input";
    if (num === 0) return "";
    const romanSymbols = [
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
    let result = "";
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

document.getElementById("convert").addEventListener("click", function() {
    const num = parseInt(document.getElementById("num").value);
    const result = convertToRoman(num);
    document.getElementById("result").innerText = result;
});