import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    galleryItem => `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${galleryItem.original}"
alt="${galleryItem.description}"></a></li>`
  )
  .join('');
imgList.insertAdjacentHTML('beforeend', galleryMarkup);

imgList.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
    <img src="${e.target.src}" width="800" height="600">
`);

    instance.show();
  }
}
