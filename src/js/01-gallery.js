// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import 'basicLightbox/dist/basicLightbox.min.css'
const basicLightbox = require('basiclightbox')
import * as basicLightbox from 'basiclightbox'
// Change code below this line

console.log(galleryItems);

// Change code below this line
const galleryConteiner = document.querySelector('div.gallery');
const items = createGallery(galleryItems);

// Задача 1
// №1


function createGallery(galleryItems) {
  return galleryItems.map(({preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" 
    />
  </a>
</div>`
    }).join(``)

}

galleryConteiner.insertAdjacentHTML('beforeend', items)

// №2

galleryConteiner.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(e) {
    const imageSource = e.target.dataset.source;
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    } else {
        const instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
`)
        instance.show();

        }
}
