import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import '../css/style.css';
import { images } from './gallery';

const galleryElement = document.querySelector('.gallery');

function createGallery(images) {
  const gallery = images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');

  return (galleryElement.innerHTML = gallery);
}

createGallery(images);

galleryElement.addEventListener('click', handleImageClick);

function handleImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = e.target.dataset.source; // Correct URL now
  const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);

  instance.show();
}
