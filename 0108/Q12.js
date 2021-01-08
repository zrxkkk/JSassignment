var library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

var authorArray = [];
library.forEach(function(book){
    authorArray.push([book.author, book.libraryID, book.title]);
})
authorArray.sort();
var newLibrary=[];
var newbook={};
for(let i=0; i<authorArray.length; i++){
    var newbook={};
    newbook.author = authorArray[i][0];
    newbook.libraryID = authorArray[i][1];
    newbook.title = authorArray[i][2];
    newLibrary.push(newbook)
}
library = newLibrary;
console.log(library)