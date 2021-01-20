
// Import the filesystem module 
const fs = require('fs'); 
  
// Get the file contents before the append operation 
console.log("\nFile Contents of file before append:", 
  fs.readFileSync("read.txt", "utf8")); 
  
fs.appendFile("read.txt", "World ", (err) => { 
  if (err) { 
    console.log(err); 
  } 
  else { 
    // Get the file contents after the append operation 
    console.log("\nFile Contents of file after append:", 
      fs.readFileSync("read.txt", "utf8")); 
  } 
});