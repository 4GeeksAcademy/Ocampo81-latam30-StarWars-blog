import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item, type }) => {
    const { store, actions } = useContext(Context);

    const getImageUrl = () => {
        if (type === "characters") {
            return `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`;
        } else if (type === "planets") {
            return `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`;
        } else if (type === "starships") {
            return `https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`;
        }
        return "https://via.placeholder.com/200";
    };

    const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            const index = store.favorites.findIndex(fav => fav.uid === item.uid && fav.type === type);
            actions.removeFavorite(index);
        } else {
            actions.getFavorite({ name: item.name, uid: item.uid, type });
        }
    };

    return (
        <div className="card bg-secondary text-light" style={{ minWidth: "200px" }}>
            <img src={getImageUrl()} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/${type}/${item.uid}`} className="btn btn-primary">
                        Learn More
                    </Link>
                    <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={handleFavoriteClick}
                    >
                        <i className={`fas fa-star ${isFavorite ? "text-warning" : ""}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

