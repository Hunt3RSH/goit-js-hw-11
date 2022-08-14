import { onEnd, onError, onSuccess } from './helper';
import { createPhotoCard } from './markuo';
import { loadMore, searchForm } from './refs';
import { getImg, incrementPage, PAGE, resetPage } from './servise';
import { clearGallery } from './utils';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Block } from 'notiflix';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: '250',
  captionsData: 'alt',
});
let value;

const onSubmitForm = async e => {
  e.preventDefault();
  clearGallery();
  resetPage();

  value = e.target.elements.searchQuery.value.trim('');
  if (!value) {
    return;
  }

  const element = await getImg(value);
  if (element.hits.length === 0) {
    loadMore.style.display = 'none';
    return onError();
  } else if (element.totalHits <= 40) {
    loadMore.style.display = 'none';
    createPhotoCard(element.hits, onSuccess(element.totalHits));
    lightbox.refresh();
    onEnd();
  } else {
    createPhotoCard(element.hits, onSuccess(element.totalHits));
    lightbox.refresh();
    loadMore.style.display = 'block';
  }
};

// const onLoadMore = async e => {
//   incrementPage();
//   const element = await getImg(value);
//   if (PAGE >= Math.floor(element.totalHits / element.hits)) {
//     loadMore.style.display = 'none';
//     onEnd();
//   }
//   createPhotoCard(element.hits);
//   lightbox.refresh();
// };

const onLoadMore = async e => {
  incrementPage();
  const element = await getImg(value);
  console.log(PAGE);
  if (PAGE >= Math.floor(element.totalHits / 40)) {
    loadMore.style.display = 'none';
    onEnd();
  }
  createPhotoCard(element.hits);
  lightbox.refresh();
};

loadMore.addEventListener('click', onLoadMore);
searchForm.addEventListener('submit', onSubmitForm);
