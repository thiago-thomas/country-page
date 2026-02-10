export interface Country {
  name: {
    common: string;
    official: string;
    native: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    }
  };
  capital: string[];
  cca2: string;
  cca3: string;
  area: number;
  subregion: string;
  region: string;
  independent: boolean;
  unMember: boolean;
  languages: {
    [languageCode: string]: string;
  };
  currencies: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  borders: string[];
}
