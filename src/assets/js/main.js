

// GALLERY

let heightGallery = document.querySelector('.gallery__list');
const buttonGallery = document.querySelector('.gallery__button');
console.log(buttonGallery);
buttonGallery.onclick = function() {
    heightGallery.style.height = 'auto';
}