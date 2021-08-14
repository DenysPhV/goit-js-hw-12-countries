const fetchCountries = searchQuery => {
  const MAIL_URL = 'https://restcountries.eu/rest/v2/name/';
  let url = `${MAIL_URL}${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default fetchCountries;
