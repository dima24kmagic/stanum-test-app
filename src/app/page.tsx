import CountriesList from "@/components/CountriesList";
import { ChangeEvent } from "react";

export default async function Home() {
  const handleCurrencyCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4 sm:p-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Countries List</h1>
      <CountriesList />
      {/*
      <CountryRow
        countryName="Belarus"
        isChecked
        currencyAbbreviation="BYN"
        onCurrencyCheck={handleCurrencyCheck}
      />
*/}
    </main>
  );
}
