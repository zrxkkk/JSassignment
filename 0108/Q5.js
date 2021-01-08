
var obj=1;

function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  }
console.log(is_dom_element(obj));