




let container = document.querySelector('.container');
let btn = document.querySelector('button');

function createDiv() {
  const newDiv = document.createElement("div");
  container.appendChild(newDiv);
  newDiv.classList.add('box');
};

function generateMultipleDivs(num) {
  for (let i = 0; i < num; i++){
    createDiv()
  }
}

function hover(event) {
  if(event.target.nodeName == "DIV") 
  event.target.classList.add("white");
}

container.addEventListener("mouseover", hover);


btn.addEventListener('click', function (){

container.innerHTML = '';
let amount = prompt("How many squares do you want to make?")
generateMultipleDivs(amount);

})
generateMultipleDivs(256);
//Need to reset the board
