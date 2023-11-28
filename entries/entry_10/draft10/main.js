function toggleLight() {
    let checkbox = document.querySelector('.switch input');
    let homePage = document.getElementById('homePage');
    
    if (checkbox.checked) {
        // Replace with your logic to get a different image URL
        let randomImage = getRandomImage();
        
        // Set the selected image source
        homePage.style.backgroundImage = `url('${randomImage}')`;
    } else {
        // Set the default image when the switch is turned off
        homePage.style.backgroundImage = "url('path/to/your-default-image.jpg')";
    }
}

// Replace this with your logic to get a different image URL
function getRandomImage() {
    const imageArray = [
        "https://davidsgardendiary.files.wordpress.com/2014/07/0141.jpg",
        "https://facts.net/wp-content/uploads/2023/08/13-unbelievable-facts-about-night-phlox-1693169866.jpg",
        "https://www.sunnyvalegarden.com/wp-content/uploads/2022/03/night-phlox-5x8-1-660x330.jpg",
        // Add more image URLs as needed
    ];
    
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
}
