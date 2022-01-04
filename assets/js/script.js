// Assignment code here

var criteria = {
  passLength:0,
  lowercase:false,
  uppercase:false,
  numeric:false,
  special:false,
  reset: function() {
    this.passLength = 0;
    this.lowercase = false;
    this.uppercase = false;
    this.numeric = false;
    this.special = false;
  },
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890"
var special = "~!@#$%^&*()_+=-"

var randomchooser = function (chooseFrom) {
  var value = Math.floor(Math.random()*chooseFrom.length)
  return value;
};

var getCriteria = function() {
  criteria.lowercase = window.confirm("Click 'OK' to allow lowercase characters. 'Cancel' to reject.");
  criteria.uppercase = window.confirm("Click 'OK' to allow uppercase characters. 'Cancel' to reject.");
  criteria.numeric = window.confirm("Click 'OK' to allow numeric characters. 'Cancel' to reject.");
  criteria.special = window.confirm("Click 'OK' to allow special characters (such as @). 'Cancel' to reject.");

  while (criteria.passLength < 8 || criteria.passLength > 128 || isNaN(criteria.passLength)) {
    criteria.passLength = window.prompt("Please enter your desired password length. (min: 8 - max: 128");
    if (criteria.passLength === null) {
        break;
      } else {
        criteria.passLength = parseInt(criteria.passLength);
        console.log (criteria);
      }
}
}

var generatePassword = function() {
  return 1234;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = displayPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var displayPassword = function() {
  window.alert("Please follow the following prompts for password critera.");
  getCriteria();

  if (criteria.passLength === null) {
    return "You have canceled the generator"
  } else {
    generatePassword();
    criteria.reset();
    return 1234;
  }
  
  
  
  
}

  

  
