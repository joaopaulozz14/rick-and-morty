import Card from "../Card";
import { useState, useEffect } from "react";
import './style.css'

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async () => {
    const response = await fetch(url);
    const list = await response.json();
    //.results está na lista
    setCharacters([...characters, ...list.results]);
    setUrl(list.info.next);
  };

  //Uma função anonima que chama o getCharacters
  //Então um array que define se estamos montando, atualizando ou desmontando a função
  useEffect(() => {
    getCharacters()
  }, []);

  useEffect(() => {
    if(!url){
      getCharacters();
    }
  }, [url]);

  return (
    <div className="home-container">
      <h1>Lista de personagens</h1>
      <div>
        <button onClick={getCharacters}>Fetch</button>
      </div>
      <div className="cardsList-container">
        {characters.map((elemento) => {
          return (
            <Card
              key={elemento.id}
              name={elemento.name}
              image={elemento.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
