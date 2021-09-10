// Constants
const MIN_PWORD_LENGTH = 8;
const MAX_PWORD_LENGTH = 128;
const CHAR_ARRAYS = {
	lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
	upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
	number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
	special: ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^",")","`","{","|","}","~"],
};

// CHARACTER PICKER FUNCTION - returns a random character from a given array of characters
function characterPicker(array) {
	// randomly select an index from the array
	var randomIndex = Math.floor(Math.random() * array.length);
	// return the character at that index from the array
	return array[randomIndex];
}

// MAIN GENERATION FUNCTION
function generatePassword() {
	var password = "";
	var passwordLength = "";

	// Prompt for password length
	while (!passwordLength) {

		// Get user input for length
		passwordLength = window.prompt(
			"How long would you like your password to be?\nPlease enter a number between " +	MIN_PWORD_LENGTH + " and " +	MAX_PWORD_LENGTH + ".");

		// Parse string to int
		passwordLength = parseInt(passwordLength);

		// Validate password length
		if (passwordLength < MIN_PWORD_LENGTH || passwordLength > MAX_PWORD_LENGTH) {
			passwordLength = "";
		}
	}

	// Prompts for password criteria
	var includeLower = window.confirm("Click OK to include lowercase characters in your password.\nClick Cancel to exclude them.\nExample: " + CHAR_ARRAYS.lower.join(""));
	var includeUpper = window.confirm("Click OK to include uppercase characters in your password.\nClick Cancel to exclude them.\nExample: " + CHAR_ARRAYS.upper.join(""));
	var includeNumber = window.confirm("Click OK to include numeric characters in your password.\nClick Cancel to exclude them.\nExample: " + CHAR_ARRAYS.number.join(""));
	var includeSpecial = window.confirm("Click OK to include special characters in your password.\nClick Cancel to exclude them.\nExample: " + CHAR_ARRAYS.special.join(""));

	// Distribute characters in password based on criteria
	while (passwordLength > 0) {

		// Add lowercase characters
		if (includeLower) {
			password += characterPicker(CHAR_ARRAYS.lower);
			passwordLength -= 1;
			if (passwordLength <= 0) {
				break;
			}
		}

		// Add uppercase characters
		if (includeUpper) {
			password += characterPicker(CHAR_ARRAYS.upper);
			passwordLength -= 1;
			if (passwordLength <= 0) {
				break;
			}
		}

		// Add numerical characters
		if (includeNumber) {
			password += characterPicker(CHAR_ARRAYS.number);
			passwordLength -= 1;
			if (passwordLength <= 0) {
				break;
			}
		}

		// Special Characters
		if (includeSpecial) {
			password += characterPicker(CHAR_ARRAYS.special);
			passwordLength -= 1;
			if (passwordLength <= 0) {
				break;
			}
		}
	}
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
