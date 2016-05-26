function evenOccurence (arr) {
  // Write your code here, and
  // return your final answer.
  var container = {};
  for (var i = 0; i < arr.length; i++) {
    if (container[arr[i]] === undefined) {
      container[arr[i]] = 1;
    }
    else {
      container[arr[i]]++
    }
  }
  console.log(container);
  for (var i = 0; i < arr. length; i++) {
    if (container[arr[i]]%2 === 0) {
      return arr[i];
    }
  }
  
  
  return null;
  
}

var answer = evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]);
console.log(answer);
answer = evenOccurence(["cat", "dog", "dig", "cat"]);
console.log(answer);
