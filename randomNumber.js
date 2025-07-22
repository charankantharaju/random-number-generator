const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");

mybutton.onclick = function () {
  const min = 1;
  const max = 6; // Generate a random integer from min to max (inclusive)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  mylabel.textContent = randomNum;
};
