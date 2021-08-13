import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import info from './js/result';

const debounce = require('lodash.debounce');

// const refs = {
//   input: document.querySelector('.search-input'),
//   countryContainer: document.querySelector('.country-container'),
// };

const onSearch = event => {
  let searchQuery = event.target.value;
  if (searchQuery) {
    fetchCountries(searchQuery).then(info.showResult);
  }
};

refs.input.addEventListener('input', debounce(onSearch, 500));
