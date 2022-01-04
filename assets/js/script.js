// Assignment code here

var criteria = {
  passLength:false,
  lowercase:false,
  uppercase:false,
  numeric:false,
  special:false,
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword = function() {
  window.alert("Please follow the following prompts for password critera");
  console.log (criteria);

}