// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let obj = {};
  let counter = 0;

  for (let i=0; i<text.length; i++) {
    let current = text[i].toLowerCase();
    obj[current] = obj.hasOwnProperty(current) ?  obj[current] + 1 : 1
  }

  for (let key in obj) {
    if(obj[key] > 1) counter++;
  }

  return counter;
}

console.log(duplicateCount('aaabbcc'));