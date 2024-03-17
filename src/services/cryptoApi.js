import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// req headers from rapidApi.
const cryptoApiHeaders = {
    "X-RapidAPI-Key": process.env.RAPID_API_SECRET_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
};
// base url for request.
const baseUrl = process.env.CRYPTO_API_BASE_URL;

// our request to get data.
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// create Api.
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/coins"),
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi;
