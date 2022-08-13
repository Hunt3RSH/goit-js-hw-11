import axios from 'axios';
import { BASE_URL, KEY, PAGE, PARAMS } from '../utils';

export const getImg = async searchRq => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${searchRq}&${PARAMS}&${PAGE}`
    );
    PAGE++;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
