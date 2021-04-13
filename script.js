// grab the elements from the DOM
const colorTitle = document.querySelector('.color-title');
const rgbBtn = document.querySelector('.rgb-btn'); 
const namedBtn = document.querySelector('.named-btn'); 
const hexBtn = document.querySelector('.hex-btn'); 
const randomBtn = document.querySelector('.random-color-method');
const body = document.querySelector('body');

// create a function that picks a random number - rgb
function rgbColor() {
  let backgroundColor = `Rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  body.style.backgroundColor = backgroundColor; 
  colorTitle.innerHTML = `Background Color: <br> <strong>${backgroundColor}</strong>`;
}

// create a function that picks a random number - named color
function namedColor(){
  const colors = ['Red', 'Blue', 'Lightblue', 'Grey', 'Black', 'Turquoise', 'Orange', 'Bluevoilet', 'Teal', 'Tan', 'Rosybrown', 'Royalblue', 'Seagreen', 'Salmon', 'Yellow', 'Peru', 'Palegreen', 'Lawngreen', 'Maroon', 'Magenta', 'Navy', 'Brown', 'Crimson', 'Chocolate', 'Coral', 'Aqua', 'Snow', 'Firebrick', 'Gold', 'Hotpink', 'Khaki'];

  let random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];
  colorTitle.innerHTML = `Background Color: <br> <strong>${colors[random]}</strong>`;
}

// create a function that picks a random number - hex
function hexColor(){
  let array = [];
  let color;
  const nextItem = [['A', 'B', 'C', 'D', 'E', 'F'], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

  for(let i = 0; i < 6; i++){
    let randomItem = Math.floor(Math.random() * 2);
    if (randomItem === 0){
      color = nextItem[0][Math.floor(Math.random() * 6)];
    } else if (randomItem === 1){
      color = nextItem[1][Math.floor(Math.random() * 9)];
    } else {
      alert('ERROR');
    }
    array.push(color);
  }

  const finalColor = `#${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}${array[5]}`;
  colorTitle.innerHTML = `Background Color: <br> <strong>${finalColor}</strong>`;
  body.style.backgroundColor = finalColor;
}

function random(){
  let randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0){
    body.style.backgroundColor = rgbColor();
  } else if (randomNum === 1){
    body.style.backgroundColor = namedColor();
  } else if(randomNum === 2){
    body.style.backgroundColor = hexColor();
  } 
}

rgbBtn.addEventListener('click', rgbColor);
namedBtn.addEventListener('click', namedColor);
hexBtn.addEventListener('click', hexColor);
randomBtn.addEventListener('click', random);

rgbBtn.addEventListener('mouseover', () => {
  rgbBtn.innerHTML = 'RGB Colors';
})

rgbBtn.addEventListener('mouseout', () => {
  rgbBtn.innerHTML = 'Click Me';
})

namedBtn.addEventListener('mouseover', () => {
  namedBtn.innerHTML = 'Named Colors';
})

namedBtn.addEventListener('mouseout', () => {
  namedBtn.innerHTML = 'Click Me';
})

hexBtn.addEventListener('mouseover', () => {
  hexBtn.innerHTML = 'Hexadecimal Colors';
})

hexBtn.addEventListener('mouseout', () => {
  hexBtn.innerHTML = 'Click Me';
})

randomBtn.addEventListener('mouseover', () => {
  randomBtn.innerHTML = 'Random'
})

randomBtn.addEventListener('mouseout', () => {
  randomBtn.innerHTML = 'Click Me';
})
