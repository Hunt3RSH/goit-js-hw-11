import { onError, onSuccess } from './helper';
import { createPhotoCard } from './markuo';
import { searchForm } from './refs';
import { getImg } from './servise';
import { clearGallery } from './utils';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: '250',
  captionsData: 'alt',
});

export const onSubmitForm = e => {
  e.preventDefault();
  clearGallery();

  const value = e.target.elements.searchQuery.value.trim('');
  if (!value) {
    return;
  }
  getImg(value).then(element => {
    if (element.hits.length === 0) {
      return onError();
    } else {
      createPhotoCard(element.hits, onSuccess(element.totalHits));
    }
  });
};

searchForm.addEventListener('submit', onSubmitForm);
