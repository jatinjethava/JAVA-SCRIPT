function hideEmail(str) {
    let str1 = str.split("@"); // [ 'jatinjethava3125', 'gmail.com' ]
    let str2 = str1[0] // jatinjethava3125
    let domain = str1[1]; // gmail.com

    let name = str2.slice(0, Math.floor(str2.length - str2.length / 2)); // jatinjet
    let hideName = "";
    for (let i = 0; i < Math.floor(name.length / 2); i++) {
        hideName += ".";
    }

    return name + hideName + "@" + domain; // jatinjet....@gmail.com
}

console.log(hideEmail("jatinjethava3125@gmail.com"))