import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getStarshipSingle(uid);
    }, [uid]);

    const starship = store.singleStarship;
    const properties = store.singleStarshipProperties;

    if (!starship) return <div>Loading...</div>;

    return (
        <div className="container-fluid bg-dark text-light d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} alt="Starship" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>{properties.name}</h1>
                    <p>{starship.description}</p>
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
                    <p><strong>Model</strong></p>
                    <p>{properties.model}</p>
                </div>
                <div className="col">
                    <p><strong>Starship Class</strong></p>
                    <p>{properties.starship_class}</p>
                </div>
                <div className="col">
                    <p><strong>Manufacturer</strong></p>
                    <p>{properties.manufacturer}</p>
                </div>
                <div className="col">
                    <p><strong>Cost in Credits</strong></p>
                    <p>{properties.cost_in_credits}</p>
                </div>
                <div className="col">
                    <p><strong>Length</strong></p>
                    <p>{properties.length}</p>
                </div>
            </div>
        </div>
    );
};

export { StarshipDetails };
