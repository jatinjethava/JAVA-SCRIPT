function Discount(amount) {
    if (amount > 0 && amount <= 5000) {
        return amount - Math.floor(amount * 0.05);
    } else if (amount > 5000 && amount <= 10000) {
        return amount - Math.floor(amount * 0.1);
    } else if (amount > 10000 && amount <= 20000) {
        return amount - Math.floor(amount * 0.15);
    } else if (amount > 20000) {
        return amount - Math.floor(amount * 0.2);
    } else if (amount < 0) {
        return amount;
    }
}

const user1 = Discount(2500);
console.log('user1: ', user1);
// 2500 * 0.05 = 125

const user2 = Discount(7500);
console.log('user2: ', user2);
// 7500 * 0.1 = 750

const user3 = Discount(15000);
console.log('user3: ', user3);
// 15000 * 0.15 = 2250

const user4 = Discount(25000);
console.log('user4: ', user4);
// 25000 * 0.2 = 5000