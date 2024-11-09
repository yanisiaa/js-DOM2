const galleryContainer = document.getElementById('galleryContainer');
let images = [];

async function fetchImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        images = data;
        displayImages(images.slice(0, 4)); 
    } catch (error) {
        console.error('Помилка завантаження зображень:', error);
    }
}

function displayImages(imageArray) {
    imageArray.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `${image.download_url}?w=300&h=200`;
        imgElement.alt = `Зображення від ${image.author}`;
        imgElement.classList.add('gallery-image'); 
        galleryContainer.appendChild(imgElement);
    });
}

function loadMoreImages() {
    const currentImages = galleryContainer.children.length;
    const newImages = images.slice(currentImages, currentImages + 4);
    if (newImages.length) {
        displayImages(newImages);
    } else {
        alert('Більше зображень немає');
    }
}

function clearGallery() {
    galleryContainer.innerHTML = '';
}

function removeLastImage() {
    if (galleryContainer.lastElementChild) {
        galleryContainer.removeChild(galleryContainer.lastElementChild);
    }
}

function reverseGallery() {
    const allImages = Array.from(galleryContainer.children);
    galleryContainer.innerHTML = '';
    allImages.reverse().forEach(img => galleryContainer.appendChild(img));
}

fetchImages();

document.getElementById("loadMoreButton").addEventListener("click", loadMoreImages);
document.getElementById("clearButton").addEventListener("click", clearGallery);
document.getElementById("removeLastButton").addEventListener("click", removeLastImage);
document.getElementById("reverseButton").addEventListener("click", reverseGallery);
