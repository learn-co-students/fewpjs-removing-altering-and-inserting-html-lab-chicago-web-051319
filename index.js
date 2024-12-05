// Write your code here!
main = document.getElementById("main");
main.remove();
let newHeader = document.createElement('h1');
let header = document.createElement('header');
document.body.appendChild(header);
header.appendChild(newHeader);
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion";