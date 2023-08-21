import React, { useContext } from "react";
import FilmContext from "./FilmsContext";

const FilmCategories = () => {
    const { film, setFilm, categories,handleCategoryChange } = useContext(FilmContext);


    return (
        <div>
            {
                categories.map((category, index) =>
                    <button key={index} type='button' onClick={() => handleCategoryChange(category)}>
                        {category}
                    </button>
                )
            }
        </div>
    )
}

export default FilmCategories;
