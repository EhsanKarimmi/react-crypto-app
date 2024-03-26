import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Top10Crypto({ data, isFetching }) {
    const [cryptos, setCryptos] = useState();
    console.log(cryptos);
    useEffect(() => {
        const tenCryptos =
            data?.data?.coins.length >= 10
                ? data?.data?.coins.slice(0, 10)
                : data?.data?.coins;
        setCryptos(tenCryptos);
    }, [data]);
    return (
        <>
            {isFetching && !data ? (
                <div>loading</div>
            ) : (
                <div className="py-5 grid grid-cols-12 gap-5 ">
                    {cryptos?.map((currency) => {
                        return (
                            <div
                                key={currency.name}
                                className="col-span-3 bg-zinc-100 border border-zinc-200 rounded-md p-4  relative hover:shadow-md transition-all duration-300"
                            >
                                <Link to={`/crypto/${currency.id}`}>
                                    <span className="absolute bg-white px-5 left-0 top-3 shadow-md rounded-r-xl font-medium uppercase">
                                        {currency.rank}
                                        {"."}
                                        {currency.name}
                                    </span>
                                    <img
                                        src={currency.iconUrl}
                                        alt="Currency_Image"
                                        className="w-full h-40 my-8"
                                    />
                                    {/* currency information */}
                                    <div className="bg-zinc-200 border border-zinc-300 px-2 py-4 rounded-md space-y-1">
                                        {/* currency price */}
                                        <p>
                                            <span className="font-medium pr-1">Price: </span>
                                            <span>{millify(currency.price)}</span>
                                        </p>
                                        {/* currency market cap */}
                                        <p>
                                            <span className="font-medium pr-1">
                                                Market Cap:{" "}
                                            </span>
                                            <span>{millify(currency.marketCap)}</span>
                                        </p>
                                        {/* currency daily change */}
                                        <p>
                                            <span className="font-medium pr-1">
                                                Daily Change:{" "}
                                            </span>
                                            <span>{millify(currency.change)}</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default React.memo(Top10Crypto);
