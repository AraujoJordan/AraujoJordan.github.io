const decField = document.getElementById('decfield');
const binField = document.getElementById('binfield');
const textResult = document.getElementById('demonstration');

decField.onkeyup = function () {
    decField.value = decField.value.replace(",", ".");
    decField.value = decField.value.replace(/[^\d.-]/g, '');

    if (decField.value.search(/^(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[-+/*%]|$))+$/))
        decField.value = decField.value.substring(0, decField.value.length - 1);
};

function decToBin() {

    const maxDecimalPlaces = 10;

    binField.value = "";
    textResult.innerHTML = "";
    let resultInt = "";

    if (decField.value === "")
        return;

    if (!decField.value.search(/^(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[-+/*%]|$))+$/)) {
        let number = decField.value;
        if (number.split('.').length !== 0) {
            for (let index = number; index > 0; index = Math.floor(index / 2)) {
                textResult.innerHTML += " " + index + "/2 =" + (Math.floor(index / 2)) + " + " + (index % 2) + "<br>";
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
                textResult.innerHTML += " " + index + "/2 =" + (Math.floor(index / 2)) + " + " + (index % 2) + "<br>";
                resultInt += "" + (index % 2);
            }
            resultInt = resultInt.split("").reverse().join("");

            textResult.innerHTML += "<br>";

            while (partsOfnumber[1] != 0 && resultFloat.length <= maxDecimalPlaces) {

                let decimalValue = parseFloat("0." + partsOfnumber[1]);

                textResult.innerHTML += decimalValue + " * 2 = ";

                partsOfnumber[1] = decimalValue * 2;

                if (partsOfnumber[1] >= 1.0) {
                    textResult.innerHTML += partsOfnumber[1]+" -> "+1;
                    resultFloat += "1";
                } else {
                    textResult.innerHTML += partsOfnumber[1]+" -> "+0;
                    resultFloat += "0";
                }
                partsOfnumber = partsOfnumber[1].split('.')
            }

            binField.value = resultInt+" "+resultFloat;
        }
        // let charValues = number.toCharArray();
    }
};

// binField.onkeyup = function () {
//     binField.value = binField.value.replace(",",".");
//     binField.value = binField.value.replace(/[^\d.-]/g, '');
//     if(binField.value === "")
//         return;
//     textResult.innerHTML = binField.value+" é número!"
// };
