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
var vault = [];

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "~!@#$%^&*()_+=-";

var changevault = function() {
  if (criteria.lowercase) {
    vault = vault + lower;
  }
  if (criteria.uppercase) {
    vault = vault + upper;
  }

  if(criteria.numeric) {
    vault = vault + numeric;
  }
  if(criteria.special) {
    vault = vault + special
  }
}

//generate the password
var generatePassword = function() {
  //change vault based on criteria
  changevault();
  if (vault.length === 0) {
    criteria.reset();
    return "You have chosen no criteria!"
  } else {

    //loop for length of password
    let i = 0;
    let password ="";
    while (i < criteria.passLength) {
      i ++;

    //choose character from vault and add to the password  
    character = vault[randomchooser(vault)];
    console.log (character);
    password = password + character
    };
    
    //reset vault and criteria for new password generation and retun password
    criteria.reset();
    vault = []
    return password;
  } 
}

//create a random chooser function to pick a number in the length of the "vaults"
var randomchooser = function (chooseFrom) {
  var value = Math.floor(Math.random()*chooseFrom.length);
  return value;
};

//prompt user to get the criteria from them
var getCriteria = function() {
  criteria.lowercase = window.confirm("Click 'OK' if you want to include lowercase letters. Click 'Cancel' to reject.");
  criteria.uppercase = window.confirm("Click 'OK' if you want to include uppercase letters. 'Cancel' to reject.");
  criteria.numeric = window.confirm("Click 'OK' if you want to include numbers. 'Cancel' to reject.");
  criteria.special = window.confirm("Click 'OK' if you want to include special characters (such as @). 'Cancel' to reject.");

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

//display actions to password generator
var displayPassword = function() {
  window.alert("Please follow the following prompts for password critera.");
  getCriteria();

  if (criteria.passLength === null) {
    return "You have canceled the generator"
  } else {
    return generatePassword();
    }
    
  }
  
  
  
  


  

  
