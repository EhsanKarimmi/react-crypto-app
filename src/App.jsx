import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";

function App() {
    return (
        <BrowserRouter>
            {/* main pages structure */}
            <main className=" h-screen grid grid-cols-12">
                {/* navbar component -> left side */}
                <Navbar />
                {/* pages and footer -> right side */}
                <div className="col-span-10">
                    {/* pages routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route path="/exchanges" element={<Exchanges />} />
                        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                    {/* footer component */}
                    <Footer />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
