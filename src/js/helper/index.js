import Notiflix from 'notiflix';

export const onError = () => {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
};

export const onSuccess = e => {
  Notiflix.Notify.success(`Hooray! We found ${e} images.`);
};

export const onEnd = () => {
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
};
