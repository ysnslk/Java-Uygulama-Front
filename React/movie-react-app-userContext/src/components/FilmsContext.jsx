import { createContext, useState, useEffect } from "react";
import { getFilms } from "./api";

const FilmContext = createContext();

function FilmProvider({ children }) {
    const [film, setFilm] = useState([]);

    const categories = ["Tümü", "Aksiyon", "Drama", "Komedi"]
    const [category, setCategory] = useState("Tümü");


    useEffect(() => {
        getFilms().then(data => setFilm(data));
    }, [])


    const handleCategoryChange = (category) => {
        setCategory(category);
    };


    const filteredFilms = category === "Tümü" ? film : film.filter((film) => film.category === category)

    const contextValue = { film, setFilm, categories, category, setCategory, handleCategoryChange, filteredFilms }

    return (
        <FilmContext.Provider value={contextValue}>
            {children}
        </FilmContext.Provider>
    )
}
export default FilmContext;
export { FilmProvider };