function mean(...n) {
  let total = 0;
  let count = n.length;
  for (let i = 0; i < count; i++) {
    total += n[i];
  }
  return total / count;
}

function median(...n) {
  let sorted = [...n].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function mode(...n){
    let arr = [...n];
    const obj = {};
    arr.forEach(n=>{
        if(!obj[n]){
            obj[n]=1;
        }else{
            obj[n]+=1;
        }
    })
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj){
        const value = obj[key];
        if(value > highestValue){
            highestValue = value;
            highestValueKey=key;
        }
    }
    return Number(highestValueKey);
}

module.exports = {mean, median, mode};