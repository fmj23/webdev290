function deepEqual(value1,value2)
{
  console.log(typeof value1);
  console.log(typeof value2); //for testing
  if ((typeof value1 == "object" && value1 != null) &&
      (typeof value2 == "object" && value2 != null)){
        //console.log(value1 == value2);
        console.log(Object.keys(value1).includes(Object.keys(value2)));
        //console.log(Object.keys(value2));
        return (value1 == value2);
      }


}
console.log("Homework tests:");
let obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj,obj));
(deepEqual(obj,obj));

//console.log(deepEqual(obj,{here:1,object:2}));
(deepEqual(obj,{here:1,object:2}));

//console.log(deepEqual(obj,{here:{is:"an"}, object:2}));
(deepEqual(obj,{here:{is:"an"}, object:2}));
