import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { MainLayout as Layout } from './layouts/MainLayout';
import { fetchCountriesByPopulation } from './services/api';
import type { Country } from './types/api';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [status, setStatus] = useState({
    unMember: false,
    independent: false,
  });

  const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    async function fetchData() {
      try {
        const countriesData = await fetchCountriesByPopulation();
        setCountries(countriesData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  function handleRegionChange(region: string) {
    setSelectedRegions(prev => {
      if (prev.includes(region)) {
        return prev.filter(selReg => selReg !== region);
      } else {
        return [...prev, region];
      }
    });
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    setStatus(prev => ({
      ...prev,
      [id === 'UnitedNations' ? 'unMember' : 'independent']: checked,
    }));
  }

  const filteredCountries = useMemo(() => {
    let ctriesFiltd = [...countries];

    if (status) {
      const lowerCaseSearch = search.toLowerCase();
      ctriesFiltd = ctriesFiltd.filter(
        country =>
          country.name.common.toLowerCase().includes(lowerCaseSearch) ||
          country.capital[0]?.toLowerCase().includes(lowerCaseSearch),
      );
    }

    if (selectedRegions.length > 0) {
      ctriesFiltd = ctriesFiltd.filter(country => selectedRegions.includes(country.region));
    }

    if (status.unMember) {
      ctriesFiltd = ctriesFiltd.filter(country => country.unMember);
    }

    if (status.independent) {
      ctriesFiltd = ctriesFiltd.filter(country => country.independent);
    }

    ctriesFiltd.sort((a, b) => {
      switch (sort) {
        case 'name':
          return a.name.common.localeCompare(b.name.common);
        case 'capital':
          return (a.capital?.[0] || '').localeCompare(b.capital?.[0] || '');
        case 'area':
          return b.area - a.area;
        default:
          return 0;
      }
    });

    return ctriesFiltd;
  }, [countries, selectedRegions, sort, status, search]);

  return (
    <Layout>
      <h2>Found {filteredCountries.length} countries</h2>
      <div className="app__input-container">
        <input
          type="text"
          className="app__search-input"
          placeholder="Search by Name, Capital"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="app__input-container">
        <label htmlFor="population">Sort by</label>
        <select
          name="population"
          id="population"
          className="app__select-input"
          onChange={e => setSort(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="capital">Capital</option>
          <option value="area">Area</option>
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
            <input
              type="checkbox"
              id="UnitedNations"
              title="Member of the United Nations"
              checked={status.unMember}
              onChange={handleStatusChange}
            />
            <label htmlFor="UnitedNations">Member of the United Nations</label>
          </div>
          <div className="app__status-container--checkbox">
            <input
              type="checkbox"
              id="Independent"
              title="Independent"
              checked={status.independent}
              onChange={handleStatusChange}
            />
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
                <span>{country.capital?.[0] || '(no capital)'}</span>
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
