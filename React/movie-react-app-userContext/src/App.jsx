import { useEffect, useState } from "react";
import "./App.css";
import { getFilms } from "./components/api";
import Card from "./components/Card";
import FilmCategories from "./components/FilmCategories";
import FilmList from "./components/FilmList";
import { FilmProvider } from "./components/FilmsContext";

/**
 * FilmCategories.jsx
 * FilmList.jsx
 * FilmsContext
 * eklenecek.
 * api.jsx
 * Card.jsx kullanılmaya devam etsin.
 */
function App() {
  const [films, setFilms] = useState([]);

  return (
    <FilmProvider>
      <div className="App">
        <h1>Filmler Projesi</h1>
        <FilmCategories />
        <FilmList />
      </div>
    </FilmProvider>
  );
}

export default App;
