import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getPlanets();
        actions.getStarships();
    }, []);

    return (
        <div className="container-fluid bg-dark text-light py-5">
            <h1 className="text-center mb-5">Star Wars Universe</h1>

            <h2>Characters</h2>
            <div className="overflow-auto mb-4">
                <div className="d-flex flex-row flex-nowrap">
                    {store.characters && store.characters.map(character => (
                        <div key={character.uid} className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }}>
                            <Card item={character} type="characters" />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Planets</h2>
            <div className="overflow-auto mb-4">
                <div className="d-flex flex-row flex-nowrap">
                    {store.planets && store.planets.map(planet => (
                        <div key={planet.uid} className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }}>
                            <Card item={planet} type="planets" />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Starships</h2>
            <div className="overflow-auto mb-4">
                <div className="d-flex flex-row flex-nowrap">
                    {store.starships && store.starships.map(starship => (
                        <div key={starship.uid} className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }}>
                            <Card item={starship} type="starships" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

