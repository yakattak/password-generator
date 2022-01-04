// set criteria for what password requires
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
// create "vaults"" to get characters from
var vault = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789","~!@#$%^&*()_+=-"];

//generate the password
var generatePassword = function() {
  let i = 0;
  let password ="";
  while (i < criteria.passLength) {
    i ++;
    
  };
    
  
  criteria.reset();
  return password; 
}


//create a random chooser function to pick a number in the length of the "vaults"
var randomchooser = function (chooseFrom) {
  var value = Math.floor(Math.random()*chooseFrom.length);
  return value;
};

//prompt user to get the criteria from them
var getCriteria = function() {
  criteria.lowercase = window.confirm("Click 'OK' to allow lowercase characters. 'Cancel' to reject.");
  criteria.uppercase = window.confirm("Click 'OK' to allow uppercase characters. 'Cancel' to reject.");
  criteria.numeric = window.confirm("Click 'OK' to allow numeric characters. 'Cancel' to reject.");
  criteria.special = window.confirm("Click 'OK' to allow special characters (such as @). 'Cancel' to reject.");

  //repeat prompt for length until they cancel or choose an acceptable length
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
    return generatePassword();
    }
    
  }
  
  
  
  


  

  
