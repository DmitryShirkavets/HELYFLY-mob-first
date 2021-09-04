

// GALLERY

let heightGallery = document.querySelector('.gallery__list');
const buttonGallery = document.querySelector('.gallery__button');
const buttonGalleryBefore = document.querySelector('.gallery__button::before');
const buttonGalleryAfter = document.querySelector('.gallery__button::after');

buttonGallery.onclick = function() {
    if(heightGallery.style.height == 'auto'){
        heightGallery.style.height = '385px';
        buttonGalleryBefore.style.transform = 'rotate(0deg)';
        buttonGalleryAfter.style.transform = 'rotate(0deg)';
    }else{
        heightGallery.style.height = 'auto';
        buttonGalleryBefore.style.transform = 'rotate(180deg)';
        buttonGalleryAfter.style.transform = 'rotate(180deg)';
    }
}