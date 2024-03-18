import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import Top10Crypto from "../components/Top10Crypto";

function Home() {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log(isFetching);
    // ! We need a loading when data isFetching in future.

    return (
        <div className="p-5">
            {/* global crypto stats section */}
            <div>
                {/* title */}
                <h3 className="uppercase font-bold text-xl">Global Crypto Stats</h3>
                {/* --- */}
                <div className="grid grid-cols-12 py-10 gap-10">
                    {/* #1 -> total cryptocurrencies */}
                    <div className="col-span-4 space-y-3 p-1 rounded-md border border-zinc-400 bg-zinc-100 text-center">
                        <h5 className=" font-semibold text-lg">Total Cryptocurrencies</h5>
                        <p className=" font-semibold text-4xl">
                            {globalStats ? millify(globalStats?.total) : "..."}
                        </p>
                    </div>
                    {/* #2 -> total exchanges */}
                    <div className="col-span-4 space-y-3 p-1 rounded-md border border-zinc-400 bg-zinc-100 text-center">
                        <h5 className=" font-semibold text-lg">Total Exchanges</h5>
                        <p className=" font-semibold text-4xl">
                            {globalStats ? millify(globalStats?.totalExchanges) : "..."}
                        </p>
                    </div>
                    {/* #3 -> total market cap */}
                    <div className="col-span-4 space-y-3 p-1 rounded-md border border-zinc-400 bg-zinc-100 text-center">
                        <h5 className=" font-semibold text-lg">Total Market Cap</h5>
                        <p className=" font-semibold text-4xl">
                            {globalStats ? millify(globalStats?.totalMarketCap) : "..."}
                        </p>
                    </div>
                    {/* #4 -> total markets */}
                    <div className="col-span-4 space-y-3 p-1 rounded-md border border-zinc-400 bg-zinc-100 text-center">
                        <h5 className=" font-semibold text-lg">Total Markets</h5>
                        <p className=" font-semibold text-4xl">
                            {globalStats ? millify(globalStats?.totalMarkets) : "..."}
                        </p>
                    </div>
                    {/* #5 -> total 24-h volume */}
                    <div className="col-span-4 space-y-3 p-1 rounded-md border border-zinc-400 bg-zinc-100 text-center">
                        <h5 className=" font-semibold text-lg">Total 24-H Volume</h5>
                        <p className=" font-semibold text-4xl">
                            {globalStats ? millify(globalStats?.total24hVolume) : "..."}
                        </p>
                    </div>
                </div>
            </div>
            {/* top 10 cryptocurrencies section */}
            <div className="py-5">
                {/* title and link */}
                <div className="flex justify-between items-center">
                    <h3 className="uppercase font-bold text-xl">Top 10 Cryptocurrencies</h3>
                    <Link to={"/cryptocurrencies"}>
                        <p className="group flex justify-start items-center py-1 px-2 font-medium text-zinc-900 rounded-md gap-1 border border-zinc-900 hover:bg-yellow-400 hover:gap-2 transition-all duration-300 ">
                            <span>Show More</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 group-hover:animate-pulse"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </p>
                    </Link>
                </div>
                {/* cryptocurrencies component */}
                <Top10Crypto data={data} isFetching />
            </div>
            {/* cryptocurrencies news section */}
            <div className="py-5">
                {/* title and link */}
                <div className="flex justify-between items-center">
                    <h3 className="uppercase font-bold text-xl">News</h3>
                    <Link to={"/news"}>
                        <p className="group flex justify-start items-center py-1 px-2 font-medium text-zinc-900 rounded-md gap-1 border border-zinc-900 hover:bg-yellow-400 hover:gap-2 transition-all duration-300 ">
                            <span>Show More</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 group-hover:animate-pulse"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
