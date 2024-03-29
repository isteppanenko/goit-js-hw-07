import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgList = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
  })
  .join('');

imgList.insertAdjacentHTML('beforeend', galleryMarkup);

imgList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  galleryItems.find(
    ({ description }) => description === e.target.getAttribute('alt')
  );
  new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
