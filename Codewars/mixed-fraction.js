// Test.assertEquals(mixedFraction('42/9'), '4 2/3');
// Test.assertEquals(mixedFraction('6/3'), '2');
// Test.assertEquals(mixedFraction('1/1'), '1');
// Test.assertEquals(mixedFraction('11/11'), '1');
// Test.assertEquals(mixedFraction('4/6'), '2/3');
// Test.assertEquals(mixedFraction('0/18891'), '0');
// Test.assertEquals(mixedFraction('-10/7'), '-1 3/7');
// Test.assertEquals(mixedFraction('-22/-7'), '3 1/7');

function mixedFraction(s){
  
  let a = s.split('/')[0],
      b = s.split('/')[1],
      c = 0,
      flag = "";

  if((a<0 || b<0) && +a !== 0) {
    flag = '-';
  }
  a = Math.abs(a);
  b = Math.abs(b);
  if (+b === 0) {
    throw new Error('Must raise ZeroDivisionError')
  }
  if (a % b === 0) return flag+""+a/b;
    
  for(let i = Math.max(a,b); i>0; i--) {
    if(a%i === 0 && b%i === 0) {
      a = a/i;
      b = b/i;
      break;
    }
  }
  
  if(a>b) {
    c += Math.trunc(a/b);
    a = a - b*c;
  }

  return c ? flag+c+' '+a+'/'+b : flag+a+'/'+b;    
}

console.log(mixedFraction('0/-2'))