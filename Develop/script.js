// Assignment code here
function generatePassword() {
	var password = "";
	var passwordLength = "";
	while (!passwordLength) {
		passwordLength = window.prompt(
			"How long would you like your password to be?\nPlease enter a number between 8 and 128."
		);
		passwordLength = parseInt(passwordLength);
		if (passwordLength < 8 || passwordLength > 128) {
			passwordLength = "";
		}
	}

	console.log(passwordLength);

	var includeLower = window.confirm("Include LOWERCASE characters?");
	var includeUpper = window.confirm("Include UPPERCASE characters?");
	var includeNumber = window.confirm("Include NUMERICAL characters?");
	var includeSpecial = window.confirm("Include SPECIAL characters?");

	while (passwordLength > 0) {
		if (includeLower) {
			var lowerArray = [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z",
			];

			password += characterPicker(lowerArray);
			passwordLength -= 1;

			if (passwordLength <= 0) {
				break;
			}
		}
		if (includeUpper) {
			var upperArray = [
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Z",
				"Y",
			];
			password += characterPicker(upperArray);
			passwordLength -= 1;

			if (passwordLength <= 0) {
				break;
			}
		}
		if (includeNumber) {
			var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
			password += characterPicker(numberArray);
			passwordLength -= 1;

			if (passwordLength <= 0) {
				break;
			}
		}
		if (includeSpecial) {
			var specialArray = [
				"!",
				'"',
				"#",
				"$",
				"%",
				"&",
				"'",
				"(",
				")",
				"*",
				"+",
				",",
				"-",
				".",
				"/",
				":",
				";",
				"<",
				"=",
				">",
				"?",
				"@",
				"[",
				"]",
				"^",
				")",
				"`",
				"{",
				"|",
				"}",
				"~",
			];
			password += characterPicker(specialArray);
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

function characterPicker(array) {
	// randomly select an index from the array
	var randomIndex = Math.floor(Math.random() * array.length);
	// return the character at that index from the array
	return array[randomIndex];
}
