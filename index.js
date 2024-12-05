// Write your code here!
document.querySelector("main#main").remove();
let newHeader = document.createElement("h1");
// newHeader.setAttribute("id", "victory");
newHeader.id = "victory";
newHeader.innerHTML = "Derek is the champion";
document.body.appendChild(newHeader);
