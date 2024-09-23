
const showImageBtn = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');
const placeholderContainer = document.getElementById('placeholderContainer');
const randomImage = document.getElementById('randomImage');
let currentImageElement; // Reference to the current image element

// Replace with your actual image URLs
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg'
    // Add more image URLs here
];
showImageBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];

//    imageElement.id = 'randomImage';
//    imageElement.classList.add('image-container-hidden');
//
//
//    showImageBtn.classList.add('image-container-hidden');
//    placeholderContainer.style.display = 'none'; // Hide placeholder after click
//
//    setTimeout(() => {
//        imageElement.classList.remove('image-container-hidden');
//        showImageBtn.classList.remove('image-container-hidden');
//        currentImageElement = imageElement; // Set currentImageElement reference
//    }, 1000);
//    if (currentImageElement) { // Check if there's a current image
//        currentImageElement.src = newImageURL; // Replace the source of the current image
//    } else { // If no current image, create a new one

//    }
});
