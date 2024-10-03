
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
    '19.jpg',
    '20.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.jpg',
    '42.jpg',
    '43.jpg',
    '44.jpg',
    '45.jpg',
    '46.jpg',
    '47.jpg',
    '48.jpg',
    '49.jpg',
    '50.jpg',
    '51.jpg',
    '52.jpg',
    '53.jpg',
    '54.jpg',
    '55.jpg',
    '56.jpg',
    '57.jpg',
    '58.jpg',
    '59.jpg',
    '60.jpg'
    
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
