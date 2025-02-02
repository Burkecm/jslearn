import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJson } from './helpers.js';
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}/${id}`);
    console.log(data.data.recipe);
    state.recipe = data.data.recipe;
  } catch (err) {
    console.error(`${err} :(`);
    throw err;
  }
};
