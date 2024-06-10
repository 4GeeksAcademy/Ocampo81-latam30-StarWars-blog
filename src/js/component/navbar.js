import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Star Wars Database</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites ({store.favorites.length})
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                                {store.favorites.length > 0 ? (
                                    store.favorites.map((favorite, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center">
                                            <Link className="dropdown-item" to={`/details/${favorite.type}/${favorite.uid}`}>
                                                {favorite.name}
                                            </Link>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => actions.removeFavorite(index)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <li><span className="dropdown-item">No favorites added</span></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


