const hiddenText = document.getElementById('hidden-text');
const circleCursor = document.getElementById('circle-cursor');
let blurTimer;
 
hiddenText.innerHTML = hiddenText.textContent
  .split(' ')
  .map((word) => `<span class="word">${word}</span>`)
  .join(' ');
 
function applyBlurToWord(word) {
  word.style.filter = 'blur(5px)';
}
 
function removeBlurFromWord(word) {
  word.style.filter = 'none';
}

 
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

 
  circleCursor.style.left = mouseX - 50 + 'px';
  circleCursor.style.top = mouseY - 50 + 'px';

 
  const isHoveringOverText = isHoveringOverElement(e, hiddenText);
 
  if (isHoveringOverText) {
    const wordElements = hiddenText.querySelectorAll('.word');
    wordElements.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        applyBlurToWord(word);
      });
      word.addEventListener('mouseleave', () => {
        clearTimeout(blurTimer);  
        blurTimer = setTimeout(() => {
          removeBlurFromWord(word);
        }, 2000);  
      });
    });
  } else {
    
    const wordElements = hiddenText.querySelectorAll('.word');
    wordElements.forEach((word) => {
      word.style.transition = 'filter 2s';  
      removeBlurFromWord(word);
    });
  }
});

 
function isHoveringOverElement(event, element) {
  const rect = element.getBoundingClientRect();
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
}
