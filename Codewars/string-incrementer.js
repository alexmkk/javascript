// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");

function incrementString (strng) {
  if (!strng.length) return "1"
  
  let checkNum = strng.match(/\d/ig); 
  if (checkNum === null) return strng + "1"

  let numStr = checkNum.join('')
  let numLength = strng.match(/\d/ig).length
  
  String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
  }
  
  numStr = String(+numStr + 1)

  return strng.replace( /\d+/, numStr.lpad("0", numLength))
}

console.log(incrementString('foo'))