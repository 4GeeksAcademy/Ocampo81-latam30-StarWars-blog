import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getCharactersSingle(uid);
    }, [uid]);

    const character = store.singleCharacter;
    const properties = store.singleCharacterProperties;

    if (!character) return <div>Loading...</div>;

    return (
        <div className="container-fluid bg-dark text-light d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row border-bottom border-2 pb-4 border-danger py-5">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt="Character" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>{properties.name}</h1>
                    <p>{character.description}</p>
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
                    <p><strong>Birth Year</strong></p>
                    <p>{properties.birth_year}</p>
                </div>
                <div className="col">
                    <p><strong>Gender</strong></p>
                    <p>{properties.gender}</p>
                </div>
                <div className="col">
                    <p><strong>Height</strong></p>
                    <p>{properties.height}</p>
                </div>
                <div className="col">
                    <p><strong>Skin Color</strong></p>
                    <p>{properties.skin_color}</p>
                </div>
                <div className="col">
                    <p><strong>Eye Color</strong></p>
                    <p>{properties.eye_color}</p>
                </div>
            </div>
        </div>
    );
};

export { CharacterDetails };
