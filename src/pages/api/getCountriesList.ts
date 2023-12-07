import type { NextApiRequest, NextApiResponse } from "next";
import { countries } from "countries-list";

type ResponseData = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const countriesArray = Object.keys(countries).map((countryKey) => ({
    // @ts-ignore
    ...countries[countryKey],
    key: countryKey,
  }));
  res.status(200).json(countriesArray);
}
