for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }
    // console.log(row);
}
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    // console.log(row);
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 

let n = 5;
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += n + " ";
        n++;
    }
    // console.log(row);
}
// 5
// 6 7
// 8 9 10 

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }
    // console.log(row);
}
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += (i + j) % 2 + " ";
    }
    // console.log(row);
}
// 0
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0 

for (let i = 1; i <= 5; i++) {
    let row = "";
    let ch = 65;

    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(ch) + " ";
        ch++;
    }

    // console.log(row);
}
// A
// A B
// A B C
// A B C D
// A B C D E 

let ch = 65;
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(ch) + " ";
        ch++;
    }

    console.log(row);
}
// A
// B C
// D E F
// G H I J
// K L M N O 