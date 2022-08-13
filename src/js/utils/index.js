import { gallery } from '../refs';

export const BASE_URL = 'https://pixabay.com/api/';
export const KEY = '29225837-ab0b73e917bda0521466d966b';
export let PAGE = 1;
export const PARAMS =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

export const clearGallery = () => {
  gallery.innerHTML = '';
};
