// The Browser Object Model (BOM) allows JavaScript to interact with the browser itself, beyond just the webpage content. It provides control over browser features like windows, navigation, and history.

// 1. Window Object
// window is the global object in browsers, but not everything (like developer tools or browser UI) is part of it
window.alert('Hello, World!');
console.log(window.innerWidth);

// 2. Navigator Object
// The navigator object provides information about the browser and the user's environment. It is often used to detect the browser type or features.
console.log(navigator.userAgent);
console.log(navigator.language);

// 3. Location Object
// The location object allows you to interact with the URL of the current document. It can be used to retrieve or manipulate parts of the URL and navigate to different pages.
console.log(location.href);
location.href = 'https://www.google.com/'

// 4. Screen Object
// The screen object provides information about the user’s screen, such as its resolution.
console.log(screen.width);
console.log(screen.height);

// 5. History Object
// The history object allows you to navigate through the browser's session history. It provides methods to move forward, backward, or to specific pages in the history stack.To see the working of history object you can run this code on the browser.
history.back();
history.forward();

// 6. Using window.resizeTo
// The window.resizeTo() method is used to resize the browser window to a specific width and height. This can be useful for controlling window dimensions in a web application.
let newWindow = window.open("https://www.example.com/", "NewWindow", "width=500,height=500");
newWindow.resizeTo(300, 300);
