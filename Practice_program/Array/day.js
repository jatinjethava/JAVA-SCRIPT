function getDay(date) {
    let [day, month, year] = date;

    let dateObj = new Date(year, month - 1, day);

    return dateObj.toLocaleDateString("en-US", {
        weekday: "long"
    });
}

console.log(getDay([28, 12, 1995]));