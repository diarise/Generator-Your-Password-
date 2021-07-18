// Array of special characters to be included in passwofdsds
var specialCase = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];
// Array of numeric characters to be included in password
var numberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
// Array of uppercase characters to be included in password
var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function for getting a random element from an array
function getRandom(arr) {
    var randomCase = Math.floor(Math.random() * arr.length)
    return arr[randomCase]

}

//console.log(getRandom);

// Function to generate password with user input
function getPasswordOptions() {
    var length = parseInt(
        prompt("How many characters would you like your password to contain?")
    )

    if (isNaN(length) === true) {
        alert('Passowrd lenght must be numerique characters, between 10 to 64');
        return;
    }

    if (length > 64) {
        alert("Please choose a number less than 65");
        return;
    }
    if (length < 10) {
        alert("Please choose a number greater than 9");
        return;
    }
    //console.log(length);

    var numberCase = confirm("Click ok to confirm numbers");
    var specialCase = confirm("Do you want to use special character?");
    var lowerCase = confirm("Do you want use lowercase?");
    var upperCase = confirm("Do you want uppercase?");

    if (numberCase === false && hasSpecialCharacter === false && lowerCase === false && upperCase === false) {
        alert("please choose one character type");
        return;
    }
    var passwordOption = {
        length,
        numberCase,
        lowerCase,
        upperCase,
        specialCase
    };

    return passwordOption;

}

function writePassword() {
    var options = getPasswordOptions();
    var passwordArray = [];
    var results = [];
    if (options.numberCase === true)
        if (options.upperCase === true)
            passwordArray = passwordArray.concat(upperCase)
    if (options.lowerCase === true)
        passwordArray = passwordArray.concat(lowerCase)
    if (options.specialCase === true)
        passwordArray = passwordArray.concat(specialCase)
    passwordArray = passwordArray.concat(numberCase)

    for (var i = 0; i < options.length; i++) {
        var index = Math.floor(Math.random() * passwordArray.length)
        var digit = passwordArray[index];
        results.push(digit)
    }

    var password = results.join("");
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    // console.log(password);
}

var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);