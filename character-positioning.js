function countLetters(string) {
  var result = {};
  var newText = string.split(' ').join('');

  console.log(newText)

  for (var i = 0; i < newText.length; i++) {
    var letter = newText[i];
    if (result[letter] !== undefined) {
      result[letter].push(i)
    } else {
      result[letter] = [i];
    }
  }
  return result;
}

console.log(countLetters('lighthouse in the house'));
