const decField = document.getElementById('decfield');
const binField = document.getElementById('binfield');
const signField = document.getElementById("signField");
const textResult = document.getElementById('demonstration');

const genericField = document.getElementById("genericfield");
const typeField = document.getElementById("typeField");
const decimalField = document.getElementById("decimalfield");
const textResult2 = document.getElementById('demonstration2');
const signField2 = document.getElementById("signField2");

const maxDecimalPlaces = 30;

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
            binField.value = signField.value + " " + resultInt;
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
            binField.value = signField.value + " " + resultInt + " " + resultFloat;
        }
        textResult.innerHTML = signField.options[signField.selectedIndex].text + " = " + signField.value + "<br>" + textResult.innerHTML;

    }
}

function anythingToDec() {
    decimalField.value = "";
    textResult2.innerHTML = "";
    let result = 0;
    let numberIndex = 0

    let genericValue = genericField.value;
    if (genericValue === "")
        return;

    let charValues = genericValue.split('');
    let base = typeField.value;
    let dotPosition = genericValue.indexOf(".");
    if (dotPosition === -1)
        dotPosition = charValues.length;

    for (numberIndex = 0; numberIndex < dotPosition; numberIndex++) {
        let expoent = (dotPosition - (numberIndex + 1));
        textResult2.innerText += "(" + charValues[numberIndex] + " * " + base + " <sup>" + expoent + "</sup> )+";
        result += hexCharToDecConverter(charValues[numberIndex]) * Math.pow(base, dotPosition - (numberIndex + 1));
    }

    let expoent = -1;
    numberIndex++;

    if (dotPosition !== (charValues.length - 1))
        for (numberIndex; numberIndex < charValues.length; numberIndex++) {
            textResult2.innerText += "(" + charValues[numberIndex] + " * " + base + " <sup>" + expoent + "</sup> )+";
            result += hexCharToDecConverter(charValues[numberIndex]) * Math.pow(base, expoent);
            expoent--;
        }


    textResult2.innerHTML = textResult2.innerText.slice(0, -1);
    if (signField2.options[signField2.selectedIndex].text === "-")
        textResult2.innerHTML = "-(" + textResult2.innerHTML + ")";
    decimalField.value = signField2.options[signField2.selectedIndex].text + "" + result;
    textResult2.innerHTML += " = " + (signField2.options[signField2.selectedIndex].text + "1") * result;

}

decField.onkeyup = function () {
    decField.value = decField.value.replace(",", ".");
    decField.value = decField.value.replace(/[^\d.-]/g, '');

    if (decField.value.startsWith("+")) {
        decField.value = decField.value.replace("+", "");
        signField.selectedIndex = 0;
    }
    if (decField.value.startsWith("-")) {
        decField.value = decField.value.replace("-", "");
        signField.selectedIndex = 1;
    }
    decToBin();
};

genericField.onkeyup = function () {
    genericField.value = genericField.value.replace(",", ".");

    if (genericField.value.startsWith("+")) {
        genericField.value = genericField.value.replace("+", "");
        signField2.selectedIndex = 0;
    }
    if (genericField.value.startsWith("-")) {
        genericField.value = genericField.value.replace("-", "");
        signField2.selectedIndex = 1;
    }

    anythingToDec();
};


function hexCharToDecConverter(value) {
    switch (value) {
        case "A":
        case "a":
            return 10;
        case "B":
        case "b":
            return 11;
        case "C":
        case "c":
            return 12;
        case "D":
        case "d":
            return 13;
        case "E":
        case "e":
            return 14;
        case "f":
        case "F":
            return 15;
        default:
            return value;
    }
}
