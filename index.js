sum = (fromN, toN)  => {
  let total = 0;
  for (let a = fromN; a <= toN; a++){
    total += a;
  }return total;
}

console.log(sum(3, 7));
module.exports = sum;