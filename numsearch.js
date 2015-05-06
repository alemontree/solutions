function NumberSearch(str) { 
  
  var arr2 = str.split("");
  var tot = arr2.length;
  var num = str.match(/[A-z]/gi);
  console.log(num);
  console.log(num.length);
 
  var arr = [];
  for (var i = 0; i < tot; i++) {

    if (arr2[i].match(/\d/)) {
      arr.push(Number(arr2[i]));
      
    }
  }
  //return arr;er

  //code goes here  
  return Math.round(arr.reduce(function(a, b) {
    return a + b;
  })/num.length);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(NumberSearch("Hello6 9World 2, Nic8e D7ay!"));                            
