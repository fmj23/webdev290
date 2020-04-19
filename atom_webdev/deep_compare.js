function deepEqual(value1,value2)
{
  console.log(typeof value1);
  console.log(typeof value2); //for testing


}
console.log("Homework tests:");
let obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj,obj));
(deepEqual(obj,obj));

//console.log(deepEqual(obj,{here:1,object:2}));
(deepEqual(obj,{here:1,object:2}));

//console.log(deepEqual(obj,{here:{is:"an"}, object:2}));
(deepEqual(obj,{here:{is:"an"}, object:2}));
