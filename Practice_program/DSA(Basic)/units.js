function payBill(amount) {
    let amountVal = 0;
    if (amount > 400) {
        amountVal = (amount - 400) * 12; // 700 - 400 = 300 * 12 = 3600
        amount = 400;
    }
    if (amount > 200) {
        amountVal += (amount - 200) * 8; // 400 - 200 = 200 * 8 = 1600
        amount = 200;
    }
    if (amount > 100) {
        amountVal += (amount - 100) * 6; // 200 - 100 = 100 * 6 = 600
        amount = 100;
    }
    if (amount > 0) {
        amountVal += amount * 4; // 100 * 4 = 400
    }
    return amountVal;
}

const customer = payBill(700);
console.log(customer);