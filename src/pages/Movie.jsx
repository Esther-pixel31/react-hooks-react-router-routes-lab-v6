// import { useEffect, useState } from "react";
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

function Movie() {

  const params = useParams()
  const id = params.id
  const [movie, setMovie] = useState({})
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then(movie => {
      setMovie(movie)
    })
    .catch(error => console.log(error))
  }, [id])
  if (!movie.title) {
    return <h2>Loading...</h2>
  }
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie?.genres.map((genre, index) => <span key={index}>{genre}</span> ) }
			</main>
		</>
	);
}

export default Movie;