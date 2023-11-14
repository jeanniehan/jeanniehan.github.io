const imageArray = [
  'jade_3.jpg',
  'jade_1.jpg',
  'JADE_2.jpg',
  'jade_4.jpg',
  // Add more image URLs as needed
];

let currentIndex = 0;

function changeBackgroundImage() {
  const selectedImage = imageArray[currentIndex];
  document.body.style.backgroundImage = `url(${selectedImage})`;
  document.body.style.backgroundSize = 'fill';
  document.body.style.backgroundRepeat = 'repeat';

  // Increment index for the next click
  currentIndex = (currentIndex + 1) % imageArray.length;
}
