export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  cca2: string;
  area: number;
  region: string;
  independent: boolean;
  unMember: boolean;
}