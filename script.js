// disallow negatives
// disallow zero
// disallow one

function validateBeats(beats){
    let message = "";
    let isValid = false; // !!!
    if (beats > 0){
        message = "Number of beats per measure cannot be negative."
    } else if (beats == 0){
        message = "Number of beats per measure cannot be zero.";
    } else if (beats == 1){
        message = "Number of beats per measure cannot be one."
    } else if (beats%1 != 0){ // Checks if beats is not an integer.
        message = "Number of beats per measure cannot have decimal places."
    } else { // valid input
        message = "";
    }
}

// Creates random string of 0s and 1s, the length of the random decimal.
function decimalToBinaryString(decimal){
    let binaryString = "";
    for (let i = 0; i < decimal; i++){
        binaryString += Math.round(Math.random());
    }
    return binaryString;
}


// 1 = +, added together
// 0 = -, separated, looks like + on site
function binarytoPartsArray(binary){
    let partsInOnes = "";
    let length = binary.length;
    for (let i = 0; i < length; i++){
        if (binary[i] == 1){
            partsInOnes += "1+"; // equiv to -
        } else {
            partsInOnes += "1"; // equiv to +
        }
    }

    const parts = partsInOnes.split("+");
    for (let i = 0; i < parts.length; i++){
        let num = parts[i].length;
        parts[i] = num;

    }
    return parts;
}

function removeEmptyParts(parts){
    for (let i = 0; i < parts.length; i++){
        if (parts[i] == ""){
            parts.splice(i, 1);
        }
    }
    return parts;
}

function partsToPartsString(parts){
    let partsString = "";
    for (let i = 0; i < parts.length; i++){
        partsString += parts[i].toString();
        if (i != parts.length - 1){
            partsString += " + ";
        }
    }
    return partsString;
}

function generateRandomPartition(maxParts){
    let randomBinary = decimalToBinaryString(maxParts);
    let parts = binarytoPartsArray(randomBinary);
    parts = removeEmptyParts(parts);
    let partsString = partsToPartsString(parts);
    return partsString;
}