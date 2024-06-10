const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            singleCharacter: {},
            singleCharacterProperties: {},
            singlePlanet: {},
            singlePlanetProperties: {},
            starships: [],
            singleStarship: {},
            singleStarshipProperties: {},
            favorites: []
        },
        actions: {
            getCharacters: async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/people/`);
                    const data = await res.json();
                    setStore({ characters: data.results });
                } catch (error) {
                    console.error(error);
                }
            },
            getPlanets: async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/planets`);
                    const data = await res.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error(error);
                }
            },
            getCharactersSingle: async (id) => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    const data = await res.json();
                    setStore({ singleCharacter: data.result });
                    setStore({ singleCharacterProperties: data.result.properties });
                } catch (error) {
                    console.error("no hubo conexion en getCharacterSingle", error);
                }
            },
            getPlanetsSingle: async (id) => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    const data = await res.json();
                    setStore({ singlePlanet: data.result });
                    setStore({ singlePlanetProperties: data.result.properties });
                } catch (error) {
                    console.error("no hubo conexion en getCharacterSingle", error);
                }
            },
            getStarships: async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/starships/`);
                    const data = await res.json();
                    setStore({ starships: data.results });
                } catch (error) {
                    console.error(error);
                }
            },
            getStarshipSingle: async (id) => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/starships/${id}`);
                    const data = await res.json();
                    setStore({ singleStarship: data.result });
                    setStore({ singleStarshipProperties: data.result.properties });
                } catch (error) {
                    console.error("no hubo conexion en getCharacterSingle", error);
                }
            },
            getFavorite: (favorite) => {
                let storeFavorites = getStore().favorites;
                setStore({ favorites: [...storeFavorites, favorite] });
            },
            removeFavorite: (index) => {
                let storeFavorites = getStore().favorites;
                storeFavorites.splice(index, 1);
                setStore({ favorites: storeFavorites });
            },
            loadSomeData: () => {
                getActions().getCharacters();
                getActions().getPlanets();
                getActions().getStarships();
            },
        }
    };
};

export default getState;
