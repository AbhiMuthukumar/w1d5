function getProfit(list){
  var max = list[0], min = list[0], diff = 0;
  list.forEach((price,i) => {
    list.slice(i+1).forEach((n) => {
      if ((n - price) > diff){
        diff = n - price;
        min = price;
        max = n;
      }
    });
  });
  console.log(`Buy at $${min} and sell at $${max}`)
}

getProfit([45, 16, 15, 31, 40, 38, 11]);

