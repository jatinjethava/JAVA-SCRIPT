// Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world.

// Allows controlled access using access modifiers (private, protected, public).
// Protects object data from direct external access.
// Encapsulation can be achieved using closures and using classes.
// Using Closures
// A closure is a function that remembers and can access variables from its outer scope, even after the outer function has finished executing. Closures are commonly used to create private variables and methods.

// Maintains a reference to surrounding scope values beyond the function’s execution.
// Enables data hiding and controlled access within JavaScript code.

// Wrapping data + methods together
// Protects data from direct access.

function BankAccount(accNum, accHolder, balance) {
    let _accNum = accNum;
    let _accHolder = accHolder;
    let _balance = balance;

    function showAccountDetails() {
        console.log(`Account Number: ${_accNum}`);
        console.log(`Account Holder Name: ${_accHolder}`);
        console.log(`Balance: ${_balance}`);
    }

    function deposit(amount) {
        _balance += amount;
        showAccountDetails();
    }

    function withdraw(amount) {
        if (_balance >= amount) {
            _balance -= amount;
            showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }

    return {
        deposit: deposit,
        withdraw: withdraw
    };
}

let myBankAccount = BankAccount("123456", "John Doe", 1000);

myBankAccount.deposit(500);
myBankAccount.withdraw(2000);