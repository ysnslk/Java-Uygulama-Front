import { useContext } from "react";
import FilmContext from "./FilmsContext";
import Card from "./Card";

const FilmList = () => {
    const { film,setFilm, filteredFilms } = useContext(FilmContext);

  return (
    <div>
        <div className='films'>
        {
          filteredFilms.map((film) => <Card key={film.id} film={film} />)
        }
      </div>
    </div>
  )
}

export default FilmList;