// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(arr => setDirectors(arr))
  }, [])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director =>{
          return <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie=> {
                return <li key={movie}>{movie}</li>
              })}
            </ul>
          </article>
        })}
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;