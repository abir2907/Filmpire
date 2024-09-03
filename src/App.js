import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=260ec8dd";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  return <h1>App</h1>;
};

export default App;
