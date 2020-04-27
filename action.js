
let cells;
let colorScheme = 'black';
let opacity = 1;

drawGrid(16);

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetDoodle)

const controls = document.querySelectorAll('#controls button');
console.log(controls);
controls.forEach(control => control.addEventListener('click', changeColorScheme));

function drawGrid(cellCount){
  const doodle = document.querySelector('#doodle');
  const cellWidth = doodle.clientWidth / cellCount
  for(let i = 0; i < cellCount; i++){
    for(let j = 0; j < cellCount; j++){
      let div = document.createElement('div');
      div.style.cssText = `height: ${cellWidth}px; width: ${cellWidth}px`;
      div.style.float = 'left';
      div.dataStep = 0;
      doodle.appendChild(div);
    }
  }
  cells = document.querySelectorAll("#doodle div");
  cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
}

function changeColor(e){
  if (colorScheme == "black"){
    e.target.style.backgroundColor = "black";
    e.target.style.opacity = 1;
  } else if (colorScheme == "disco"){
    e.target.style.backgroundColor = "#" + Math.floor(Math.random() * 4096).toString(16);
    e.target.style.opacity = 1;
  } else if (colorScheme == "wash"){
    e.target.style.backgroundColor = "black";
    e.target.dataStep += .2;
    e.target.style.opacity = e.target.dataStep;
  }
}

function changeColorScheme(e){
  colorScheme = e.target.textContent;
  if(colorScheme == "wash"){
    opacity = 0;
  } else{
    opacity = 1;
  }
}

function resetDoodle(){
  let dim = +prompt("Enter number of cells per side.")
  const doodle = document.querySelector('#doodle');
  while(doodle.hasChildNodes()){
    doodle.removeChild(doodle.firstChild);
  }
  drawGrid(dim);
}