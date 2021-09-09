// Assignment code here

function generatePassword() {
	var password = "lorem";
	var length = window.prompt(
		"How long would you like your password to be?\nPlease enter a number between 8 and 128."
	);
	var includeLower = window.confirm("Include LOWERCASE characters?");
	var includeUpper = window.confirm("Include UPPERCASE characters?");
	var includeNumber = window.confirm("Include NUMERICAL characters?");
	var includeSpecial = window.confirm("Include SPECIAL characters?");

	return password;
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
