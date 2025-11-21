const API_URL = 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json';

export async function fetchCountriesByPopulation() {
  try {
    const url = `${API_URL}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error on requesting data: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
}
