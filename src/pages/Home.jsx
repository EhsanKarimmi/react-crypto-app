import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";

function Home() {
    const { data, isFetching } = useGetCryptosQuery();

    const globalStats = data?.data?.stats;
    // ! We need a loading when data isFetching in future.
    console.log(data);
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
        </div>
    );
}

export default Home;
