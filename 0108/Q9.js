function key_value_pairs(obj){
    var Pair = [];
    for (var key in obj){
        Pair.push([key,obj[key]]);
    }
    return Pair;
}

var obj={name: "Bob", age: "20", city: "Tokyo"}
console.log(key_value_pairs(obj));