import { useEffect, useState } from 'react';
import './App.css';
import { MainLayout as Layout } from './layouts/MainLayout';
import { fetchCountriesByPopulation } from './services/api';
import type { Country } from './types/api';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  //const [search, setSearch] = useState('');
  
  const [filteredCountries, setfilteredCountries] = useState<Country[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    async function fetchData() {
      try {
        const countriesData = await fetchCountriesByPopulation();
        setCountries(countriesData);
        setfilteredCountries(countriesData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if(selectedRegions.length > 0) {
      setfilteredCountries(countries.filter(country => selectedRegions.includes(country.region)))
    } else {
      setfilteredCountries(countries)
    }
  },[selectedRegions])

  function handleRegionChange(region: string) {
    setSelectedRegions(prev => {
      if (prev.includes(region)) {
        return prev.filter(selReg => selReg !== region);
      } else {
        return [...prev, region];
      }
    });
  }

  return (
    <Layout>
      <h2>Found {filteredCountries.length} countries</h2>
      <div className="app__input-container">
        <input type="text" className="app__search-input" placeholder="Search by Name, Region" />
      </div>

      <div className="app__input-container">
        <label htmlFor="population">Sort by</label>
        <select name="population" id="population" className="app__select-input">
          <option value="#">Population</option>
        </select>
      </div>

      <div className="app__input-container">
        <label>Region</label>
        <div className="app__region-container">
          {regions.map(region => (
            <button
              key={region}
              type="button"
              className={`app__region-container--buttons ${selectedRegions.includes(region) ? 'active' : ''}`}
              onClick={() => handleRegionChange(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      <div className="app__input-container">
        <label>Status</label>
        <div className="app__status-container">
          <div className="app__status-container--checkbox">
            <input type="checkbox" id="UnitedNations" title="Member of the United Nations" />
            <label htmlFor="UnitedNations">Member of the United Nations</label>
          </div>
          <div className="app__status-container--checkbox">
            <input type="checkbox" id="Independent" title="Independent" />
            <label htmlFor="Independent">Independent</label>
          </div>
        </div>
      </div>

      <table className="app__country-grid-container">
        <thead>
          <tr>
            <th>
              <span>Flag</span>
            </th>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Capital</span>
            </th>
            <th>
              <span>Area (km²)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map(country => (
            <tr>
              <td>
                <img
                  src={`https://flagcdn.com/w80/${country.cca2.toLowerCase()}.png`}
                  alt={`Flag of ${country.name.common}`}
                />
              </td>
              <td>
                <span>{country.name.common}</span>
              </td>
              <td>
                <span>{country.capital[0]}</span>
              </td>
              <td>
                <span>{country.area}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default App;
