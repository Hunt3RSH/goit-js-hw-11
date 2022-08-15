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
  <a class="photo-card" href="${largeImageURL}">
   <div class="card-img"><img
    src="${webformatURL}"
    alt="${tags}"
    loading="lazy"
    width="${webformatWidth}"
    height="400"
  /></div>
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${downloads}
    </p>
  </div></a>`;
      }
    )
    .join('');
  return gallery.insertAdjacentHTML('beforeend', imgMarkup);
};
