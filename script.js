const originalColors = {
  box1: { backgroundColor: 'red', borderColor: '#4c243b' },
  box2: { backgroundColor: 'purple', borderColor: 'dotted' },
  box3: { backgroundColor: 'green', borderColor: 'solid' }
};

function changeColor(boxNumber) {
  const box = document.getElementById(`box${boxNumber}`);
  const colors = ["#404e5c", "#b7c3f3", "#dd7596", "#cf1259", "#af9164", "#f7f3e3", "#b3b6b7", "#6f1a07", "#2b2118", "#3dfaff", "#48beff", "#83e8ba", "#01BAEF", "#0CBABA", "#380036", "#06BEE1", "#DAD4EF", "#DE6B48", "#F4B9B2", "#DAEDBD", "#7DBBC3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomBorderColor = colors[Math.floor(Math.random() * colors.length)];

  box.style.backgroundColor = randomColor;
  box.style.borderColor = randomBorderColor;
  box.classList.add('changed'); 
}

function changeAllColors() {
  for (let i = 1; i <= 3; i++) {
    changeColor(i);
  }
}

function hideBox(boxNumber) {
  const box = document.getElementById(`box${boxNumber}`);
  box.style.visibility = "hidden";
}

function hideAllBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
    box.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to your buttons
  document.querySelector("#reset-button").addEventListener("click", resetColors);
  document.querySelector("#showAllButton").addEventListener("click", showAllBoxes);

  // Your original code...
});

// Define a function to reset colors
function resetColors() {
  for (let i = 1; i <= 3; i++) {
    const box = document.getElementById(`box${i}`);
    box.style.backgroundColor = originalColors[`box${i}`].backgroundColor;
    box.style.borderColor = originalColors[`box${i}`].borderColor;
    box.classList.remove('changed');
    box.style.visibility = "visible"; // Make sure the box is visible
  }
}
