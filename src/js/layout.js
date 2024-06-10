import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharacterDetails } from "./views/CharacterDetails";
import { PlanetDetails } from "./views/PlanetDetails";
import { StarshipDetails } from "./views/StarshipDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/characters/:uid" element={<CharacterDetails />} />
                        <Route path="/details/planets/:uid" element={<PlanetDetails />} />
                        <Route path="/details/starships/:uid" element={<StarshipDetails />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
