import type { Country } from '../types/api'

const API_URL = 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json';

export async function fetchCountriesByPopulation() {
  try {
    const url = `${API_URL}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error on requesting data: ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
}

export async function fetchCountryByName(name: string) {
  try {
    const allCountries = await fetchCountriesByPopulation();
    const country = allCountries.find((country: Country) => country.name.common == name);
    return country;
    
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
}
