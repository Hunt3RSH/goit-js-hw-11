import { gallery } from '../refs';

export const createPhotoCard = (data = []) => {
  const imgMarkup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        webformatWidth,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
  <a class="photo-card" href="${largeImageURL}" onclick="(e)=>{e.preventDefault()}">
  <img
    src="${webformatURL}"
    alt="${tags}"
    loading="lazy"
    width="${webformatWidth}"
    height="400"
  />
  <div class="info">
    <p class="info-item">
      <b>Likes:<br> ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views:<br> ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments:<br> ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:<br> ${downloads}</b>
    </p>
  </div></a>`;
      }
    )
    .join('');
  return gallery.insertAdjacentHTML('beforeend', imgMarkup);
};
