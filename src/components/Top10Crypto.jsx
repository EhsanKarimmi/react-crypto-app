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
                <div className="bg-blue-600 grid grid-cols-12 gap-4 py-5 ">
                    {cryptos?.map((currency) => {
                        return (
                            <Link to={`/crypto/${currency.id}`} key={currency.name}>
                                <div className="col-span-12 bg-red-400 ">
                                    <img src={currency.iconUrl} alt="" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default React.memo(Top10Crypto);
