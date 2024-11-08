const gallery = document.getElementById("gallery");
const loadMoreButton = document.getElementById("loadMoreButton");
const clearButton = document.getElementById("clearButton");
const removeLastButton = document.getElementById("removeLastButton");
const reverseButton = document.getElementById("reverseButton");

const photos = [
    {"id":"0","download_url":"https://picsum.photos/id/0/5000/3333"},
    {"id":"1","download_url":"https://picsum.photos/id/1/5000/3333"},
    {"id":"2","download_url":"https://picsum.photos/id/2/5000/3333"},
    {"id":"3","download_url":"https://picsum.photos/id/3/5000/3333"},
    {"id":"4","download_url":"https://picsum.photos/id/4/5000/3333"},
    {"id":"5","download_url":"https://picsum.photos/id/5/5000/3334"},
    {"id":"6","download_url":"https://picsum.photos/id/6/5000/3333"},
    {"id":"7","download_url":"https://picsum.photos/id/7/4728/3168"},
    {"id":"8","download_url":"https://picsum.photos/id/8/5000/3333"},
    {"id":"9","download_url":"https://picsum.photos/id/9/5000/3269"}
];
let currentIndex = 0;

function loadImages(count = 4) {
    for (let i = 0; i < count; i++) {
        if (currentIndex >= photos.length) currentIndex = 0;
        
        const img = document.createElement("img");
        img.src = photos[currentIndex].download_url;
        img.alt = `Фото ${photos[currentIndex].id}`;
        gallery.appendChild(img);
        
        currentIndex++;
    }
}

function clearGallery() {
    gallery.innerHTML = '';
}

function removeLastImage() {
    if (gallery.lastChild) gallery.removeChild(gallery.lastChild);
}

function reverseGallery() {
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
}

loadMoreButton.addEventListener("click", () => loadImages(4));
clearButton.addEventListener("click", clearGallery);
removeLastButton.addEventListener("click", removeLastImage);
reverseButton.addEventListener("click", reverseGallery);

document.addEventListener("DOMContentLoaded", () => loadImages(4));
