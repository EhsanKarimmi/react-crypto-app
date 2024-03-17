import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// req headers from rapidApi.
const cryptoApiHeaders = {
    "X-RapidAPI-Key": "a12d358196mshad69108da11cacdp108e49jsn9eeeccecfa13",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
// base url for request.
const baseUrl = "https://coinranking1.p.rapidapi.com";

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
