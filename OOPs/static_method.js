// JavaScript Static Methods and Properties
// JavaScript Static Methods and Properties are defined on a class itself rather than its instances, and are accessed using the class name. They are commonly used for utility functions or shared data that doesn’t depend on object instances.

// Declared using the static keyword inside a class.
// Accessed using the class name, not object instances.
// Useful for utility functions and shared class-level data.

class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

// Calling static methods on the class
console.log(MathUtils.add(5, 3));
console.log(MathUtils.multiply(4, 6));