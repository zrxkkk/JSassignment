function all_values(obj){
    var Values = [];
    for (var key in obj){
        Values.push(obj[key]);
    }
    return Values;
}

var obj={name: "Bob", age: "20", city: "Tokyo"}
console.log(all_values(obj));