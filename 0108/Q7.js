function change_key_value(obj){
    var newKeys = [];
    var newValues = [];
    var newObj = {};
    for (var key in obj){
        newKeys.push(obj[key]);
        newValues.push(key);
    }
    for(let i=0; i<newKeys.length; i++){
        newObj[newKeys[i]] = newValues[i];
    }
    return newObj;
}

var obj={name: "Bob", age: "20", city: "Tokyo"}
console.log(change_key_value(obj));