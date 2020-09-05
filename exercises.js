function removeChar (string, chars) {
  let newString = "";
  for (i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);
    console.log("CurrentChar:" + currentChar);
    let isVowel = chars.includes(currentChar);
    console.log("IsVowel:" + isVowel);
      if (!isVowel) {
        newString += currentChar;
      }
  }
  console.log(newString);
  return newString;
}

removeChar("Doesn't matter", "aeiou")