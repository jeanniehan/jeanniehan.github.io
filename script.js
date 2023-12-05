// Function to set random position for each flower
function setRandomPosition(item) {
  const container = document.querySelector('.container');
  const maxX = container.clientWidth - item.clientWidth;
  const maxY = container.clientHeight - item.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  item.style.left = `${randomX}px`;
  item.style.top = `${randomY}px`;
}

// Apply random positions to each flower
document.addEventListener('DOMContentLoaded', function () {
  const flowers = document.querySelectorAll('.item');
  flowers.forEach(function (flower) {
    setRandomPosition(flower);
  });
});
