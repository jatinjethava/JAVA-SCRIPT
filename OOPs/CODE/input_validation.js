function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}
if (!validateEmail(email)) {

    throw new Error("Invalid email");
}