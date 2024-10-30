//Chapter 79: Browser control-Filling-the-window-with-content

// Open a Popup window
// var monkeyWindow = window.open();

          // FILLING WINDOW WITH CONTENT 

// FILLING WINDOW WITH CONTENT - method 1: document.write();
// Putting html content to newly opened  tab/popup
// var monkeyWindow = window.open();
// var windowContent = `<h1> My Bicycle</h1><p>lorem the the doe  alwo alo wla</p>`;
// monkeyWindow.document.write(windowContent);  


// FILLING WINDOW WITH CONTENT - method 2: location.assign();
// monkeyWindow.location.assign("http://www.google.com");
// or 
// monkeyWindow.location.href = "http://www.google.com";

// FILLING WINDOW WITH CONTENT - Method 3 : Openning a specific URL Directly 
// window.open("http://www.google.com");

// close original 
// window.close();

// close popup window
// monkeyWindow.close();