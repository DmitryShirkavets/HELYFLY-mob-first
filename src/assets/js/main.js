// GALLERY LIST

const buttonGallery = document.querySelector('.gallery__button');
const listGallery = document.querySelector('.gallery__list');

buttonGallery.onclick = function() {
    if(listGallery.classList.contains('active')){
        listGallery.classList.remove('active');
    }else{
        listGallery.classList.add('active');
    }
}

// MEETING SLIDER

$('.meeting__slider').slick();