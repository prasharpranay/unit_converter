function convert() {
    var value = parseFloat(document.getElementById("value").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    var result;

    // Conversion formulas
    if (fromUnit === "mm" && toUnit === "cm") {
        result = value / 10;
    } else if (fromUnit === "cm" && toUnit === "mm") {
        result = value * 10;
    } else if (fromUnit === "cm" && toUnit === "m") {
        result = value / 100;
    } else if (fromUnit === "m" && toUnit === "cm") {
        result = value * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
        result = value / 1000;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = value * 1000;
    } else if (fromUnit === "inch" && toUnit === "cm") {
        result = value * 2.54;
    } else if (fromUnit === "cm" && toUnit === "inch") {
        result = value / 2.54;
    } else if (fromUnit === "ft" && toUnit === "m") {
        result = value * 0.3048;
    } else if (fromUnit === "m" && toUnit === "ft") {
        result = value / 0.3048;
    } else if (fromUnit === "yd" && toUnit === "m") {
        result = value * 0.9144;
    } else if (fromUnit === "m" && toUnit === "yd") {
        result = value / 0.9144;
    } else if (fromUnit === "mile" && toUnit === "km") {
        result = value * 1.60934;
    } else if (fromUnit === "km" && toUnit === "mile") {
        result = value / 1.60934;
    } else {
        result = value;
    }

    document.getElementById("result").innerHTML = value + " " + fromUnit + " is equal to " + result + " " + toUnit;
}
