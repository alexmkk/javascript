// Test.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
// Test.assertEquals(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")

function reverse(str){
  return str.trim() ?
    str.split(' ').map((elem, i) => {
    return i % 2 !== 0 ? elem.split('').reverse().join('') : elem;
  }).join(' ')
  : '';
}

console.log(reverse("  "))