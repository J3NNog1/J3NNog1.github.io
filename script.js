function changeColor(boxNumber) {
  const box = document.getElementById(`box${boxNumber}`);
  const colors = ["#404e5c", "#b7c3f3", "#dd7596", "#cf1259", "#af9164", "#f7f3e3", "#b3b6b7", "#6f1a07", "#2b2118", "#3dfaff", "#48beff", "#83e8ba", "#01BAEF", "#0CBABA", "#380036","#FFFFFF", "#DAD4EF", "#DE6B48", "#F4B9B2", "#DAEDBD", "#7DBBC3"]; 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomBorderColor = colors[Math.floor(Math.random() * colors.length)];

  box.style.backgroundColor = randomColor;
  box.style.borderColor = randomBorderColor;
}

function changeAllColors() {
  for (let i = 1; i <= 3; i++) {
      changeColor(i);
  }
}