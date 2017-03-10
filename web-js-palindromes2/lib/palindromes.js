function isPalindrome(s) {
  var stringReverse = s.replace(/\s/g,'').split("").reverse().join("").toLowerCase();
  return s.replace(/\s/g,'').toLowerCase() == stringReverse;
}

module.exports = isPalindrome;
