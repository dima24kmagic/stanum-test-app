"use client";
import React, { useEffect, useState } from "react";
import CountryRow from "@/components/CountryRow";
import { ICountry } from "countries-list";

export interface ICountriesListProps {}

/**
 * Countries List
 */
function CountriesList(props: ICountriesListProps) {
  const countries = useCountriesList();
  return (
    <div>
      {countries?.map((country: ICountry) => {
        return (
          <CountryRow
            // @ts-ignore
            key={country?.key}
            // @ts-ignore
            countryAbbreviation={country?.key}
            countryName={country?.name}
            currencyAbbreviation={country?.currency?.[0] ?? "USD"}
          />
        );
      })}
    </div>
  );
}

function useCountriesList() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const query = await fetch(`http://localhost:3000/api/getCountriesList`);
        const res = await query.json();
        setCountries(res);
        return res;
      } catch (e) {
        setCountries([]);
      }
    })();
  }, []);

  return countries;
}
export default CountriesList;
