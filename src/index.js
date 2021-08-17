import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import info from './js/result';

const debounce = require('lodash.debounce');

const onSearch = event => {
  event.preventDefault();

  const searchQuery = event.target.value;

  if (searchQuery) {
    fetchCountries(searchQuery)
      .then(info.showResult)
      .catch(error => error);
  }
};

refs.input.addEventListener('input', debounce(onSearch, 500));
