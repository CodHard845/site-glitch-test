document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('fireworkCanvas');
  const ctx = canvas.getContext('2d');
  const colorPicker = document.getElementById('colorPicker');
  const wideButton = document.getElementById('wideRatioButton');

  canvas.width = 600;
  canvas.height = 300;

  drawFirework(colorPicker.value);

  colorPicker.addEventListener('input', () => {
    drawFirework(colorPicker.value);
  });

  wideButton.addEventListener('click', () => {
    canvas.width = 1500;
    canvas.height = 300;
    drawFirework(colorPicker.value);
  });

  function drawFirework(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 20 + 10;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
});
