function duplicatedEncode(inputStr) {
  const charsObj = {};
  const lowerCaseStr = inputStr.toLowerCase();
  let result = "";

  for(const char of lowerCaseStr) {
    charsObj[char] = charsObj[char] ? charsObj[char] + 1 : 1;
  }

  for(const char of lowerCaseStr) {
    if (charsObj[char] === 1) {
      result = result + "1";
    } else {
      result = result + "*";
    }
  }

  return result;
}

console.log(duplicatedEncode("11*2"));
