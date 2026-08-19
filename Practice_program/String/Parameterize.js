function Parameterize(str) {
    let str2 = str.split(" ");

    let param_str = "";
    for (let i = 0; i < str2.length; i++) {
        param_str += str2[i] + "-";
    }
    return param_str.slice(0, -1);
}

console.log(Parameterize("my name is jatin jethava"))