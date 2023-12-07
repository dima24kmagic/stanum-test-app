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
    return (
      <>
        <div
          className="my-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        Loading...
      </>
    );
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
export default CountriesList;
