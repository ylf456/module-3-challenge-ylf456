var alphabeticArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericalArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?']
var uppercaseAlphabeticArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

//for (var i = 0; i < alphabeticArray.length; i++) {
//uppercaseAlphabeticArray[i] = alphabeticArray[i].toUpperCase();
//}
//console.log(uppercaseAlphabeticArray)
var allArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("Welcome to the random password generator. Please select the following password criteria to start: ") // \n\n1).Your password must be at least 8 characters and at most 128 characters in length. \nor 2). Your password must include at least one uppercase letter and one special character \nor both 1) and 2)"
  var generatePassword = function () {
    var lengthofPassword = prompt("Please specify the length of your password.\n(enter a number between 8 and 128)", "8");
    console.log(lengthofPassword); // always a string
    var numlengthofPassword = Number(lengthofPassword); // if lengthofPassword !== number, return NaN
    // add code to roundup input here
    numlengthofPassword = Math.floor(numlengthofPassword)
    console.log(numlengthofPassword); // if lengthofPassword !== number, return NaN 
    console.log(typeof (numlengthofPassword)); // return number
    console.log(numlengthofPassword >= 8);  //return false if value input <=7
    console.log(numlengthofPassword <=128); //return false if value input >=129
    //check if === NaN, and null   & add some edge case
    
    if ((numlengthofPassword === NaN) === true) {
      alert("please enter a numeric number for the length of password."); generatePassword();
    } else if (numlengthofPassword === null) {
      alert("Canceled password length input. \n Please click the Generate 'Password button' to start again."); return;
    }
    else if ((numlengthofPassword >= 8 && numlengthofPassword <= 128) === false) {
      alert("Your password must be at least 8 characters and at most 128 characters in length.\nPlease specify the length of yourpassword again"); generatePassword()
    } else {
      var uppercaseorNot = confirm("DO you want uppercase letters?")
      var lowercaseorNot = confirm("Do you want lowercase letters?")
      var numericorNot = confirm("Do you want numeric numbers?")
      var specialcharacterorNot = confirm("Do you want special characters?")

      var i = Math.floor(Math.random() * numlengthofPassword)

      for (var i2 = 0; i2 < numlengthofPassword.length; i2 = i2 + 1)
        if (uppercaseorNot && lowercaseorNot && numericorNot && specialcharacterorNot === false) {
          alert("Please choose at least one criteria!"); generatePassword();
        } else if (
          uppercaseorNot && lowercaseorNot && numericorNot && specialCharacterArray === true) {
          password = allArray[i2]
        }

    }
  }

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
