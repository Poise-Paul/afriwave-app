import { Country } from "@/types";
import axios, { AxiosResponse } from "axios";
export const fetchCountries = async (config: any): Promise<Country[]> => {
  const res: AxiosResponse<Country[]> = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd"
  );
  return res.data;
};
