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
  while ((SpecialInput === false) && (NumbersInput === false) && (LowerInput === false) && (UpperInput === false)) {
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
  PasswordLength = prompt("Pick A Password Length Between 10 And 64 Characters!");
  console.log("Password Length = " + PasswordLength + " Characters");

  // Whilst PasswordLength Is Less Than 10 Or Higher Than 64 ....
  while (PasswordLength <= 9 || PasswordLength > 64) {
    // Continue To Prompt User To Provide A Valid Length For The Password And Print Answer To Console For Reference
    PasswordLength = prompt("Pick A Password Length Between 10 And 64 Characters!");
    console.log("Password Length = " + PasswordLength + " Characters");
  }
}

// An Empty Array For Password Specifications To Fall Into Dependent On User Input
var ValidOptions = [];
// An Empty Array For Random Password Generation To Fall Into Dependent On User Input
var RandomOptions = [];
// An Empty Array For The Final Password Once Generated To Fall Into
var FinalPassword = [];

// Function To Validate User Input And Push Relevant Arrays Into New Array
function GeneratePassword() {
  // If SpecialInput === True ....
  if (SpecialInput) {
    // Push Special Array Into The ValidOptions Array
    for (var SpecialIndex = 0; SpecialIndex < Special.length; SpecialIndex++) {
      ValidOptions.push(Special[SpecialIndex]);
    }
  }
  // If NumbersInput === True ....
  if (NumbersInput) {
    // Push Numbers Array Into The ValidOptions Array
    for (var NumberIndex = 0; NumberIndex < Numbers.length; NumberIndex++) {
      ValidOptions.push(Numbers[NumberIndex]);
    }
  }
  // If LowerInput === True ....
  if (LowerInput) {
    // Push Lower Array Into The ValidOptions Array
    for (var LowerIndex = 0; LowerIndex < Lower.length; LowerIndex++) {
      ValidOptions.push(Lower[LowerIndex]);
    }
  }
  // If UpperInput === True ....
  if (UpperInput) {
    // Push Upper Array Into The ValidOptions Array
    for (var UpperIndex = 0; UpperIndex < Upper.length; UpperIndex++) {
      ValidOptions.push(Upper[UpperIndex]);
    }
  }
  // Print The ValidOptions Array To The Console For Reference
  console.log("Valid Options Include: ", ValidOptions);

  // Push Valid Options Into A New Array Dependent On User Input
  for (var RandomIndex = 0; RandomIndex < PasswordLength; RandomIndex++) {
    RandomOptions.push(ValidOptions[Math.floor(Math.random() * ValidOptions.length)]);
  }
  // Print Random Options To Console For Reference
  console.log("Random Options Include: ", RandomOptions);

  // A Variable To Determine If The Random Options Includes Items From The Original Numbers Array
  var IncludesNumbers = RandomOptions.includes(Numbers);
  // If The User Wanted Numbers AND Random Options Doesnt Include Numbers ....
  if (NumbersInput === true & IncludesNumbers === false) {
    // At Index 3 Of Random Options Remove 2 Items
    RandomOptions.splice(3, 2);
    // At The End Of The Random Options Array Push 2 Random Items From The Numbers Array
    RandomOptions.push(Numbers[Math.floor(Math.random() * Numbers.length)]);
    RandomOptions.push(Numbers[Math.floor(Math.random() * Numbers.length)]);
  }

  // A Variable To Determine If The Random Options Includes Items From The Original Special Array
  var IncludesSpecial = RandomOptions.includes(Special);
  // If The User Wanted Special Characters AND Random Options Doesn't Include Random Characters ....
  if (SpecialInput === true & IncludesSpecial === false) {
    // At Index 6 Of Random Options Remove 1 Item
    RandomOptions.splice(6, 1);
    // At The End Of The Random Options Array Push 1 Random Item From The Special Array
    RandomOptions.push(Special[Math.floor(Math.random() * Special.length)]);
  }

  // A Variable To Determine If The Random Options Includes Items From The Original Lower Array
  var IncludesLower = RandomOptions.includes(Lower);
  // If The User Wanted Lower Characters AND Random Options Doesn't Inlcude Lower Characters ....
  if (LowerInput === true & IncludesLower === false) {
    // At Index 0 Of Random Options Remove 1 Item
    RandomOptions.splice(0, 1);
    // At The End Of The Random Options Array Push 1 Random Item From The Lower Array
    RandomOptions.push(Lower[Math.floor(Math.random() * Lower.length)]);
  }

  // A Variable To Determine If The Random Options Includes Items From The Original Upper Array
  var IncludesUpper = RandomOptions.includes(Upper);
  // If The User Wanted Upper Characters AND Random Options Does'nt Include Upper Characters ....
  if (UpperInput === true & IncludesUpper === false) {
    // At Index 7 Of Random Options Remove 1 Item
    RandomOptions.splice(7, 1);
    // At The End Of The Random Options Array Push 1 Random Item From The Upper Array
    RandomOptions.push(Upper[Math.floor(Math.random() * Upper.length)]);
  }
  // Print New RandomOptions To The Console For Reference
  console.log("New Random Options Are: ", RandomOptions);
  // Assign FinalPassword Variable A Value Of The RandomOptions Array With No Spaces
  FinalPassword = RandomOptions.join("");
  // Printing Final Password To Console For Reference
  console.log("The Final Password Is: " + FinalPassword);
}

// Function To Run Processes On The Click Of Generate Button And Display Final Password In Desired Area
function PrintToHTML() {
  // Calling The PasswordOptions Function
  PasswordOptions();
  // Calling The GeneratePassword Function
  GeneratePassword();
  // Print Final Password To The Location Of HTML ID "password"
  document.getElementById("password").innerHTML = FinalPassword;
}