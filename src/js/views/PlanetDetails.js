import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPlanetsSingle(uid);
    }, [uid]);

    const planet = store.singlePlanet;
    const properties = store.singlePlanetProperties;

    if (!planet) return <div>Loading...</div>;

    return (
        <div className="container-fluid bg-dark text-light d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} alt="Planet" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>{properties.name}</h1>
                    <p>{planet.description}</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores eaque exercitationem numquam architecto tenetur fugit praesentium sunt iste eos,
                        delectus minima saepe quam impedit obcaecati maiores,
                        voluptatum cupiditate quibusdam.
                        Tenetur.
                    </p>
                </div>
            </div>
            <div className="row py-5">
                <div className="col">
                    <p><strong>Name</strong></p>
                    <p>{properties.name}</p>
                </div>
                <div className="col">
                    <p><strong>Diameter</strong></p>
                    <p>{properties.diameter}</p>
                </div>
                <div className="col">
                    <p><strong>Climate</strong></p>
                    <p>{properties.climate}</p>
                </div>
                <div className="col">
                    <p><strong>Gravity</strong></p>
                    <p>{properties.gravity}</p>
                </div>
                <div className="col">
                    <p><strong>Terrain</strong></p>
                    <p>{properties.terrain}</p>
                </div>
                <div className="col">
                    <p><strong>Population</strong></p>
                    <p>{properties.population}</p>
                </div>
            </div>
        </div>
    );
};

export { PlanetDetails };
