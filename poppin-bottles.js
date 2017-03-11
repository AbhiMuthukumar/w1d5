var bottleCount = 0;
var emptyBottles = 0;
var bottleCaps = 0;
var investment = process.argv[2];

bottleCount = emptyBottles = bottleCaps = investment / 2;
console.log(`${bottleCount}   ${emptyBottles}  ${bottleCaps}`);

while (emptyBottles >=2 || bottleCaps >= 4){
  if (emptyBottles >= 2){
    bottleCount += Math.floor(emptyBottles / 2);
    bottleCaps += Math .floor(emptyBottles / 2);
    emptyBottles = Math.floor(emptyBottles / 2) + (emptyBottles % 2);
    console.log(`${bottleCount}   ${emptyBottles}  ${bottleCaps}`);
  }
  if (bottleCaps >= 4){
    bottleCount += Math.floor(bottleCaps / 4);
    emptyBottles += Math.floor(bottleCaps / 4);
    bottleCaps = Math.floor(bottleCaps / 4) + (bottleCaps % 4);
    console.log(`${bottleCount}   ${emptyBottles}  ${bottleCaps}`);
  }
}
console.log(`${bottleCount} bottles supplied.`);
