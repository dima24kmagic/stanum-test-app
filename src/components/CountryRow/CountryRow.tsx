"use client";
import React, { useState } from "react";
import CheckBox from "@/components/CheckBox";

export interface ICountryRowProps {
  countryAbbreviation: string;
  countryName: string;
  currencyAbbreviation: string;
}

const CHECKED_COUNTRIES_STORAGE = "checkedCountries";
const handleUpdateLocalStorage = ({
  currencyAbbreviation,
  countryAbbreviation,
  isChecked,
}: {
  countryAbbreviation: string;
  currencyAbbreviation: string;
  isChecked: boolean;
}) => {
  const checkedCounties = getCheckedCountriesStorage();
  if (isChecked) {
    checkedCounties[countryAbbreviation] = currencyAbbreviation;
  } else {
    delete checkedCounties[countryAbbreviation];
  }
  localStorage.setItem(
    CHECKED_COUNTRIES_STORAGE,
    JSON.stringify(checkedCounties),
  );
};

const getCheckedCountriesStorage = () => {
  try {
    return JSON.parse(localStorage?.getItem(CHECKED_COUNTRIES_STORAGE) ?? "{}");
  } catch (e) {}
};

/**
 * Country + Price row
 */
function CountryRow(props: ICountryRowProps) {
  const { countryName, currencyAbbreviation, countryAbbreviation } = props;
  const [isChecked, setIsChecked] = useState(
    getCheckedCountriesStorage()?.[countryAbbreviation] || false,
  );
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    handleUpdateLocalStorage({
      countryAbbreviation,
      currencyAbbreviation,
      isChecked: !isChecked,
    });
  };
  return (
    <div
      className="container flex justify-between
                 bg-blue-950
                 border-solid border-sky-500 border-2 rounded
                 py-3 px-5
                 max-w-none sm:max-w-sm
                 mb-2"
    >
      <label htmlFor={countryAbbreviation} className="hover:cursor-pointer text-slate-100">
        {countryName} {isChecked && `| ${currencyAbbreviation}`}
      </label>
      <CheckBox
        id={countryAbbreviation}
        type="checkbox"
        className="hover:cursor-pointer"
        onChange={handleOnChange}
        checked={isChecked}
      />
    </div>
  );
}

export default CountryRow;
