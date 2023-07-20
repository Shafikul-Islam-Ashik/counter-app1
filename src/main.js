// get elements
const btn1 = document.querySelector(".box button.start");
const btn2 = document.querySelector(".box button.stop");
const btn3 = document.querySelector(".box button.reset");
const h2 = document.querySelector(".box h2");

// init val
let count = 0;
let counter;

h2.innerHTML = count;

// start
btn1.onclick = () => {
  h2.innerHTML = count;

  counter = setInterval(() => {
    count++;
    h2.innerHTML = count;
  }, 1000);
};

// stop
btn2.onclick = () => {
  h2.innerHTML = count;

  clearInterval(counter);
};

// reset
btn3.onclick = () => {
  count = 0;
  h2.innerHTML = count;

  clearInterval(counter);
};
