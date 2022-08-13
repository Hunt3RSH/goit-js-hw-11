import axios from 'axios';
import { BASE_URL, KEY, PARAMS } from '../utils';
export let PAGE = 1;

export const getImg = async searchRq => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${searchRq}&${PARAMS}&page=${PAGE}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const incrementPage = () => {
  PAGE++;
};

export const resetPage = () => {
  return (PAGE = 1);
};
