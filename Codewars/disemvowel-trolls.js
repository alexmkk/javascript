function disemvowel(str) {
  const gl = ["A", "E", "I", "O", "U"]
  
  return str.split('').filter(el => !gl.includes(el.toUpperCase())).join('');
}

console.log(disemvowel("This website is for losers LOL!"))