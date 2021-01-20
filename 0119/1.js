
console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');

//Any function passed as the setImmediate() argument is a callback 
// that's executed in the next iteration of the event loop.