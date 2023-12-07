"use client";
import React, { useEffect, useState } from "react";
import CountryRow from "@/components/CountryRow";
import { ICountry } from "countries-list";
import { useQuery } from "react-query";

export interface ICountriesListProps {}

/**
 * Countries List
 */
function CountriesList(props: ICountriesListProps) {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery("countriesList", () =>
    fetch(`${window?.location?.origin}/api/getCountriesList`).then((res) =>
      res.json(),
    ),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error getting countries list!</div>;
  }
  return (
    <div>
      {data.map((country: ICountry) => {
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
