

// GALLERY

let heightGallery = document.querySelector('.gallery__list');
const buttonGallery = document.querySelector('.gallery__button');

buttonGallery.onclick = function() {
    if(heightGallery.style.height == 'auto'){
        heightGallery.style.height = '385px';
    }else{
        heightGallery.style.height = 'auto';
    }
}