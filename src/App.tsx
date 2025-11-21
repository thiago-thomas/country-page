import { useEffect, useState } from 'react';
import './App.css';
import { MainLayout as Layout } from './layouts/MainLayout';
import { fetchCountriesByPopulation } from './services/api';

interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  area: number;
  region: string;
  independent: boolean;
  unMember: boolean;
  flag: string; // emoji
}

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountriesByPopulation();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <h2>Found 234 countries</h2>
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
          <button type="button" className="app__region-container--buttons active">
            Americas
          </button>
          <button type="button" className="app__region-container--buttons active">
            Antartic
          </button>
          <button type="button" className="app__region-container--buttons active">
            Africa
          </button>
          <button type="button" className="app__region-container--buttons active">
            Asia
          </button>
          <button type="button" className="app__region-container--buttons active">
            Europe
          </button>
          <button type="button" className="app__region-container--buttons active">
            Oceania
          </button>
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
              <span>Population</span>
            </th>
            <th>
              <span>Area (km²)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="./src/assets/react.svg" alt="Country image" />
            </td>
            <td>
              <span>United States</span>
            </td>
            <td>
              <span>329,484,123</span>
            </td>
            <td>
              <span>9,372,961</span>
            </td>
          </tr>
          <tr>
            <td>
              <img src="./src/assets/react.svg" alt="Country image" />
            </td>
            <td>
              <span>Brazil</span>
            </td>
            <td>
              <span>250,000,000</span>
            </td>
            <td>
              <span>10,372,961</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default App;
