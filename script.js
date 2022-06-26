window.onload = () => {
  
  const cursorX = document.querySelector('.x');
  const cursorY = document.querySelector('.y');
  
  window.addEventListener('mousemove', function(event) {
    cursorX.textContent = event.clientX + 'px';
    cursorY.textContent = event.clientY + 'px';
  });
  
}