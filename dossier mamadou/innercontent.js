
let divContent = document.getElementById("content");

let h1 = document.createElement("h1");
h1.textContent = "Welcome to the JavaScript Course";
let h2 = document.createElement("h2");
h2.style.color = "blue";
h1.classList.add("title");
divContent.appendChild(h1);
divContent.appendChild(h2);
h2.textContent = "Learn the Basics of JavaScript";
document.body.innerHTML += "<P>Welcome to the JavaScript Course</P>";
