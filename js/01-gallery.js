import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemContainer = document.querySelector(".gallery");
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryItemContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original.value}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </div>`;
    })
    .join("");
}

const onContainerClick = (event) => {
    event.preventDefault();

    if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}"width="800" height="600">`);

    instance.show();
}

galleryItemContainer.addEventListener("click", onContainerClick);
console.log(galleryItemContainer)