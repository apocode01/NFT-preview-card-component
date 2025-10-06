const cardImageButton = document.querySelector(`.card__image-button`);
const cardImageOverlay = document.querySelector(`.card__image-overlay`);
const cardImageOverlayIcon = document.querySelector(`.card__image-overlay-icon`);

cardImageButton.addEventListener(`mouseenter`, () => {
    cardImageOverlay.classList.remove(`hidden`);
    cardImageOverlayIcon.classList.remove(`hidden`);
})

cardImageButton.addEventListener(`mouseleave`, () => {
    cardImageOverlay.classList.add(`hidden`);
    cardImageOverlayIcon.classList.add(`hidden`);
})