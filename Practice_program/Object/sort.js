// Sort Objects by Title
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

const sortedObj = library.sort((a, b) => {
    return a.title.localeCompare(b.title)
});
console.log(sortedObj);