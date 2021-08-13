import refs from './refs';
import countriesItemHbs from '../templates/country-items.hbs';
import countryContainerHbs from '../templates/container-country.hbs';

const render = {
  countriesItem(data) {
    const markup = countriesItemHbs(data);
    refs.countryContainer.innerHTML = '';
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
  },
  country(data) {
    const markup = countryContainerHbs(...data);
    refs.countryContainer.innerHTML = '';
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
  },
};
export default render;
