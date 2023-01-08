// A Series Of Arrays Containing All Characters That Could Be Included In The Password
var Special = ['@', '%', '+', '\\', '/', "'", '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var Lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var Upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// A Series Of Variables To Collect User Input
var SpecialInput = false;
var NumbersInput = false;
var LowerInput = false;
var UpperInput = false;
var PasswordLength = 0;

// Creating A Function To Collect User Input For Password Options
function PasswordOptions() {
  // Whilst SpecialInput, NumbersInput, LowerInput And UpperInput Is False ....
  while((SpecialInput === false) && (NumbersInput === false) && (LowerInput === false) && (UpperInput === false)) {
    // Confirm With User If Special Characters Should Be Included And Print Answer To Console For Reference
    SpecialInput = confirm("Do You Want To Include Special Characters In Your Password?");
    console.log("Special Characters = " + SpecialInput);
    // Confirm With User If Numerical Characters Should Be Included And Print Answer To Console For Reference
    NumbersInput = confirm("Do You Want To Include Numbers In Your Password?");
    console.log("Numerical Characters = " + NumbersInput);
    // Confirm With User If Lower Cased Characters Should Be Included And Print Answer To Console For Reference
    LowerInput = confirm("Do You Want To Include Lower Cased Characters In Your Password?");
    console.log("Lower Cased Characters = " + LowerInput);
    // Confirm With User If Upper Cased Characters Should Be Included And Print Answer To Console For Reference
    UpperInput = confirm("Do You Want To Include Upper Cased Characters In Your Password?");
    console.log("Upper Cased Characters = " + UpperInput);
  }
  // Prompt User To Provide A Length For The Password And Print Answer To Console For Reference
  PasswordLength = prompt("Pick A Password Length Between 10 And 63 Characters!");
  console.log("Password Length = " + PasswordLength + " Characters");
  
  // Whilst PasswordLength Is Less Than 10 Or Higher Than 63 ....
  while (PasswordLength <= 9 || PasswordLength > 63) {
    // Continue To Prompt User To Provide A Valid Length For The Password And Print Answer To Console For Reference
    PasswordLength = prompt("Pick A Password Length Between 10 And 63 Characters!");
    console.log("Password Length = " + PasswordLength + " Characters");
  }
}
// Call PasswordOptions Function So It Can Run!
PasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

