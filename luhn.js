function isValidNumber(number){
  var numArray = String(number).split("");

  finalArray = numArray.map((n,i) => {
    if (i % 2)
      return (Number(n) * 2) > 9 ? ((Number(n) * 2) - 9) : (Number(n) * 2);
    else
      return Number(n);
  });

  return !(finalArray.reduce((sum,n) => sum + n) % 10);
}

module.exports = isValidNumber;