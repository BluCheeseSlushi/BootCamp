// Assignment code here

function generatePassword() {
let finishedPassword = ""
let passwordChara = [];
let lowerChara  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperChara = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numChara = ["0","1","2","3","4","5","6","7","8","9"];
let specialChara = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","\\","^","_","`","{","}","|","~"];
  let passwordlength = prompt("How long would you like your password to be?");
  if (passwordlength < 8 || passwordlength >128)
    alert("Passwords must be between 8-128 characters long")
  else {
    if (confirm("Would you like to include lowercase characters?") === true){
      passwordChara = passwordChara.concat(lowerChara);
    }
     
    if (confirm("Would you like to include uppercase characters?") === true){
      passwordChara = passwordChara.concat(upperChara);
    }
  
    if (confirm("Would you like to include number characters?") === true){
      passwordChara = passwordChara.concat(numChara);
    }
  
    if  (confirm("Would you like to include special characters?") === true){
      passwordChara = passwordChara.concat(specialChara);
    }
    if (passwordChara.length != 0){
      for (let i = 0; i <= passwordlength; i++){
        let nextChara = Math.floor(Math.random() * passwordChara.length) 
        finishedPassword = finishedPassword + passwordChara[nextChara];
      }
      return finishedPassword;
    }
    else {
      alert("Please select character groups for your password")
    }
  }
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