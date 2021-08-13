const fetchCountries = searchQuery => {
  const MAIL_URL = 'https://restcountries.eu/rest/v2/name/';
  let url = `${MAIL_URL}${searchQuery}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export default fetchCountries;
