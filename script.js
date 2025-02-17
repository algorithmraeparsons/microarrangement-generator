// Validates beat input. Disallows negatives, 0, 1, and decimals.
// Returns error message if problems, empty string otherwise.
function validateBeats(beats){
    let message = "";
    if (beats < 0){
        message = "Number of beats cannot be negative."
    } else if (beats == 0){
        message = "Number of beats cannot be 0.";
    } else if (beats == 1){
        message = "Number of beats cannot be 1."
    } else if (beats%1 != 0){ // Checks if beats is not an integer.
        message = "Number of beats cannot have decimal places."
    } else { // valid input
        message = "";
    }
    return message;
}

// Creates random string of 0s and 1s.
// Returns binary string of decimal length
function decimalToBinaryString(decimal){
    let binary = "";
    for (let i = 0; i < decimal; i++){
        binary += Math.round(Math.random());
    }
    return binary;
}

// Converts random binary String to a parts array.
// Returns array (possibly with empty strings).
// 1 = +, added together
// 0 = -, separated--looks like + on website for user clarity
// ex. beats = 4, random binary = 101/+-+, then parts = 1+1-1+1
function binarytoPartsArray(binary){
    let partsInOnes = "";
    for (let i = 0; i < binary.length; i++){
        if (binary[i] == 1){
            partsInOnes += "1+"; // equivalent to -
        } else { // binary[i] == 0
            partsInOnes += "1"; // equivalent to +
        }
    }
    const parts = partsInOnes.split("+"); // creates array
    for (let i = 0; i < parts.length; i++){
        let num = parts[i].length;
        parts[i] = num;

    }
    return parts;
}

// Refines parts by removinng empty string elements.
// Returns array.
function removeEmptyParts(parts){
    for (let i = 0; i < parts.length; i++){
        if (parts[i] == ""){
            parts.splice(i, 1);
        }
    }
    return parts;
}

// Converts parts array to string for printing.
// Returns string.
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

// Generate a random integer partition of a sum of beats.
// All listed output values will add up to input.
// Returns string.
function generate(beats){
    let randomBinary = decimalToBinaryString(beats);
    let parts = binarytoPartsArray(randomBinary);
    parts = removeEmptyParts(parts);
    return partsToPartsString(parts);
}

// Takes user beat input, validates it, and if validation passes,
// generates a partition output, formats it, and prints it.
// No parameters nor returns, just edits index.html's output.
function main(){
    const beatInput = document.getElementById("beatInput").value;
    const validationMessage = validateBeats(beatInput);
    document.getElementById("validationMessage").innerHTML = validationMessage;
    let beats;
    if (validationMessage == ""){
        beats = beatInput;
        document.getElementById("beatsString").innerHTML = "Random partition of " + beats + " beats:";
        var partsString = generate(beats);
        document.getElementById("partsString").innerHTML = partsString;
    }
}