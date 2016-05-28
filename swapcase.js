function SwapCase(str) { 
  for (var i = 0; i < str.length; i++) {
    var arr = [];
    if (str[i].match(/[a-z]/) {
        arr.push(str[i].toUpperCase());
    }
    else if (str[i].match(/[A-Z]/) {
         arr.push(str[i].toLowerCase());    
    }
    else {
      arr.push(str[i]);
  }
}

  // code goes here  
  return arr.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());    