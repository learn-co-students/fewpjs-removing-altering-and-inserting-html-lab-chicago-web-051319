// Write your code here!
document.getElementById('main').remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
let para = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(para);
document.body.appendChild(newHeader);
// let newHeader = document.querySelector('main');
