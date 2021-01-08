function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }

var obj={name: "Bob", age: "20", city: "Tokyo"}
console.log(hasKey(obj, "name"));
console.log(hasKey(obj, "country"));