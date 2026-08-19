function Abbreviate(str) {
    let name = "";
    let str1 = str.split(" ");

    name += str1[0] + " ";
    name += str1[1][0].toUpperCase() + ".";

    return name;
}

console.log(Abbreviate("jatin jethava"))