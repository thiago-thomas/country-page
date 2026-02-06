import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCountryByName } from '../../services/api';
import type { Country } from '../../types/api';
import {  InfoPill } from '../../components/InfoPill'
import './style.css';

export function CountryPage() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    async function getCountryByName(countryName: string) {
      try {
        const countryData = await fetchCountryByName(countryName);
        if (!countryData) {
          navigate('/');
          return;
        } else {
          setCountry(countryData);
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (name) {
      getCountryByName(name);
    }
  }, []);

  if (!country) {
    navigate('/');
    return null;
  }

  return (
    <>
      <header className="country-header">
        <div className="country-header-main-info">
          <img
            src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
            alt={`Flag of ${country.name.common}`}
          />
          <h1>{country.name.common}</h1>
          <p>{country.name.official}</p>
        </div>
        <div className="country-header-data">
          <InfoPill keyInfo='Population' valueInfo='N/A' />
          <InfoPill keyInfo='Area(km²)' valueInfo={country.area.toString()} />
        </div>
      </header>
    </>
  );
}
