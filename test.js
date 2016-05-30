identity = function(val) {
return val;
};

var each = function(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  }
  else {
    for (var elem in collection) {
      iterator(collection[elem], elem, collection);
    }
  }
};



var filter = function(collection, test) {
  res = [];
  each(collection, function(x) {
    if (test(x)) {
      res.push(x);
    }
  })
  //console.log(res);
  return res;
};

var ar = [1, 2, 3, 4];
var isEven = function(num) { return num % 2 === 0; };

var output = filter(ar, isEven);
//console.log(output);

var reject = function(collection, test) {
  // TIP: see if you can re-use _.filter() here, without simply
  // copying code in and modifying it
  return filter(collection, function(x) {return !test(x)});

};
//console.log(reject([1,2,3,4], isEven));


// filter2 = function(collection, test) {
//   var res = [];
//   for (var i = 0; i < collecton.length; i++) {
//     if (test(collection[i])) {
//       res.push(collection[i]);
//     }
//   }

//   // _.each(collection, function(x) {
//   //   if (test(x)) {
//   //     res.push(x);
//   //   }
//   // })
//   return res;
// };

// output = filter2(ar, isEven);
// console.log(output);

reduce = function(collection, iterator, accumulator) {
  var total = accumulator;
  if (total === undefined) {
    total = collection[0];
    collection = collection .slice(1, collection.length);
  }
  each(collection, function(x) {
    total = iterator(total, x);
  })
  return total;
};

//console.log(reduce([1,2,3], function(sum, value) {return sum + value;}, 50));


every = function(collection, iterator) {
  // TIP: Try re-using reduce() here.
  if (collection.length === 0) {
    return true;      
  }
  var result = true;
  each(collection, function(x) {
    if (result === false) {
    return false;
    }
    result = iterator(x) ? true : false;
  })
  return result;

  };

some = function(collection, iterator) {
  // TIP: There's a very clever way to re-use every() here.
  var result = every(collection, function(x) {
    return !iterator(x);

  });
  return !result;
};

// var test = some([2, 5, 6, 4, 6, undefined], isEven);
// console.log(test, "should be true");

// console.log(every([true, false, 1], identity), 'should be false')
// console.log(every([1, undefined, true], identity), 'should be false')
// console.log(every([undefined, undefined, undefined], identity), 'should be false')

// console.log(some([true, false, 1], identity), 'should be true')
// console.log(some([1, undefined, true], identity), 'should be true')
// console.log(some([undefined, undefined, undefined], identity), 'should be false')


extend = function(obj) {
  //console.log(obj);
  //console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      //console.log(arguments[i], key, arguments[i][key]);
      obj[key] = arguments[i][key];
      //console.log(arguments[i].key)
    }
  }
  return obj;
};

// test_obj = {a: 1, b: 2, c: 3};
// test_obj2 = {name: "Ella"};
// test_obj3 = {another_object: {cat: "Ella", dog: "Sammy"}};

// console.log(test_obj);
// console.log(extend(test_obj, {d: 4, e: 5}, {f: 6, a: "overwritten"}));
// console.log(test_obj);
//console.log(extend(test_obj3, test_obj2));

// var to = {};
// var from = { a: 'b' };
// var extended = extend(to, from);
// console.log(extended.a, "should be b", (extended.a === 'b'));
// extended = extend({ x: 1 }, { a: 2 }, { b:3 });
// console.log(extended, "should be { x: 1, a: 2, b: 3 }")


var memoize = function(func) {
  var alreadyCalled = {};
  var result;

  return function() {
    var args = [];
    for (var arg in arguments) {
      args.push(arguments[arg])

    }
    console.log("args are: ", args);

    console.log(arguments[0])
    console.log("Args are: ", args);

    console.log("artuments are: ", arguments);
    if (alreadyCalled[args] === undefined) {
      result = func.apply(this, arguments);
      alreadyCalled[args] = result;
      console.log("these args for the first time", alreadyCalled);
      return result
    }
    else {
      return alreadyCalled[args];
      console.log("aready had these args", alreadyCalled);
    }   

  }

};

var a = 2
  ,b = 3
  ,c =7
  ,d = 8;

// var memoAdd = memoize(function(x, y) { return x + y});

// console.log(memoize(function(a, b) {return a + b;}), " test 1");
// console.log(memoize(function(c, d) {return c + d;}), " test 2");

// console.log(memoAdd(1, 5), " test 3");
// console.log(memoAdd(3, 4), " test 3");


delay = function(func, wait) {

  //setTimeout(func, wait);
  return function() {
    result = func.apply(this, arguments);
    console.log("result is: ", result);
    setTimeout(result, wait);
    return result;
  }


};

// var f1 = function(a, b) {return a * b};
// console.log("start")

// console.log(delay(f1, 100, 1, 2));
//clock.tick(100);
  

shuffle = function(array) {
  var output = [];
  console.log(array);
  var copy = array.slice();

  for (var i = copy.length; i > 0; i--) {
      index = Math.floor(Math.random()*copy.length) 
      output.push(copy.splice(index, 1)[0]);
  }
  //console.log(list);
  console.log(array);
  return output;

};

// console.log(shuffle([4, 3, 2, 1]));

// uniq = function(array) {

//   var res = [];
//   for (var i = 0; i < array.length; i++) {
//     //console.log(res, "__", array[i], (array[i] in res));
//     if ((res.indexOf(array[i]) === -1)){
//       res.push(array[i]);
//     }
//   }
//   //console.log(res);
//   return res;
// };


uniq = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {

    if (result.indexOf(array[i]) === -1){
      result.push(array[i]);
    }
    else {
    }
  }
  return result;
};

console.log(uniq([1, 2, 3, 3, 4, 4]));