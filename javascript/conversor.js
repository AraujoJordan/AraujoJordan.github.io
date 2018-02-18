const decField = document.getElementById('decfield');
const binField = document.getElementById('binfield');
const textResult = document.getElementById('demonstration');

const genericField = document.getElementById("genericfield");
const typeField = document.getElementById("myselect");
const decimalField = document.getElementById("decimalfield");
const textResult2 = document.getElementById('demonstration2');

const maxDecimalPlaces = 10;

decField.onkeyup = function () {
    decField.value = decField.value.replace(",", ".");
    decField.value = decField.value.replace(/[^\d.-]/g, '');

    if (decField.value.search(/^(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[-+/*%]|$))+$/))
        decField.value = decField.value.substring(0, decField.value.length - 1);
};

function decToBin() {

    binField.value = "";
    textResult.innerHTML = "";
    let resultInt = "";

    if (decField.value === "")
        return;

    if (!decField.value.search(/^(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[-+/*%]|$))+$/)) {
        let number = decField.value;
        if (!number.includes(".")) {
            for (let index = number; index > 0; index = Math.floor(index / 2)) {
                textResult.innerHTML += " " + index + "/2 = " + (Math.floor(index / 2)) + " + " + (index % 2) + "<br>";
                resultInt += "" + (index % 2);
            }
            resultInt = resultInt.split("").reverse().join("");
            binField.value = resultInt;
            return
        }
        else {
            let partsOfnumber = number.split('.');
            let resultFloat = "";

            for (let index = partsOfnumber[0]; index > 0; index = Math.floor(index / 2)) {
                textResult.innerHTML += " " + index + "/2 = " + (Math.floor(index / 2)) + " + " + (index % 2) + "<br>";
                resultInt += "" + (index % 2);
            }
            resultInt = resultInt.split("").reverse().join("");
            textResult.innerHTML += "<br>";

            while (partsOfnumber[1] != 0 && resultFloat.length <= maxDecimalPlaces) {

                let decimalValue = parseFloat("0." + partsOfnumber[1]);

                textResult.innerHTML += decimalValue + " * 2 = ";
                partsOfnumber[1] = (decimalValue * 2);

                if (partsOfnumber[1] >= 1.0) {
                    textResult.innerHTML += partsOfnumber[1] + " -> " + 1 + "<br>";
                    resultFloat += "1";
                } else {
                    textResult.innerHTML += partsOfnumber[1] + " -> " + 0 + "<br>";
                    resultFloat += "0";
                }
                if (partsOfnumber[1] === 1.0)
                    break;
                partsOfnumber = String(partsOfnumber[1]).split('.');
            }

            binField.value = resultInt + " " + resultFloat;
        }

    }
}

function anythingToDec() {
    decimalField.value = "";
    textResult2.innerHTML = "";
    let resultInt = 0;

    let genericValue = genericField.value;
    if (genericValue === "")
        return;

    let charValues = genericValue.split('');
    let base = typeField.value;
    if (!genericValue.includes(".")) {
        for (let numberIndex = 0; numberIndex < charValues.length; numberIndex++) {
            textResult2.innerText += "("+charValues[numberIndex]+" * "+base+"<sup>"+(charValues.length-(numberIndex+1))+"</sup>)&nbsp;+&nbsp;";
            resultInt += hexCharToDecConverter(charValues[numberIndex])*Math.pow(base, charValues.length-(numberIndex+1));
        }
        textResult2.innerHTML = textResult2.innerText.slice(0,-7);
        textResult2.innerHTML += " = "+resultInt;
        decimalField.value = resultInt;
    }
    else {

    }
}

function hexCharToDecConverter(value) {
    switch (value) {
        case "A":
        case "a": return 10;
        case "B":
        case "b": return 11;
        case "C":
        case "c": return 12;
        case "D":
        case "d": return 13;
        case "E":
        case "e": return 14;
        case "f":
        case "F": return 15;
        default: return value;
    }
}
