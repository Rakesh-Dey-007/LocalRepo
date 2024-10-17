// Some random colors for the balls
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36", "#0504AA", "#00FFFF", "#80EF80", "#FFDE21"];
const numBalls = 50;
const balls = [];

// Create and style the balls
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}



// Animate the balls with keyframes
balls.forEach((el, i) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

// Auto typing text effect
const text = "RD_CodeFlair";
const autoTextElement = document.getElementById("auto-text");
let index = 0;
let isDeleting = false;
let speed = 150; // Speed of typing and deleting
let pauseTime = 1000; // Pause between typing and deleting

function typeText() {
  // If we are deleting and the index is 0, we need to clear the text before starting again
  if (isDeleting && index === 0) {
    autoTextElement.textContent = ""; // Clear text completely
    isDeleting = false; // Reset deleting state
    setTimeout(typeText, pauseTime); // Add a pause before starting the typing again
    return;
  }

  const currentText = text.substring(0, index);
  autoTextElement.textContent = currentText;

  if (!isDeleting && index < text.length) {
    index++; // Typing the text
  } else if (isDeleting && index > 0) {
    index--; // Deleting the text
  }

  // When text is completely typed, wait for a moment before deleting
  if (!isDeleting && index === text.length) {
    setTimeout(() => isDeleting = true, pauseTime);
  }

  setTimeout(typeText, speed);
}

document.addEventListener('DOMContentLoaded', typeText);