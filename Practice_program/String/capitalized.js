function capitalizeWords(str) {
    return str
        .split(" ") // ["hi", "i", "am", "jatin", "jethava!"]
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1) // Returns remaining string except first character.
        )
        .join(" ");
}

console.log(capitalizeWords("hi i am jatin jethava!"));
// "Hi I Am Jatin Jethava!"