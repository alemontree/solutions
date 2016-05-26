function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.

  arr = ['r', 'p', 's'];
  output = [];

  var recurse = function (roundCount, string) {
    if (roundCount === 0) {
      output.push(string);
      return;
    }
    else {

      
      for (var i = 0; i < arr.length; i++) {

        string = string.concat(arr[i]);
        recurse(roundCount-1, string);
        
        
        // string = '';

      }
    }
    var string = "";

    

  }
  recurse(roundCount, '');


  return output;
}


console.log(rockPaperPermutation(2));
