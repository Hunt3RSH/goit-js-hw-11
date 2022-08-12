import axios from 'axios';
import { BASE_URL, KEY, PARAMS } from '../utils';

export const inputData = async searchRq => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${searchRq}&${PARAMS}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
