import React, { useState } from "react";

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


const MovieSelect = () => {
  const [genre, setGenre] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <h1>Lista dei film</h1>
        </div>
        <div className="col-100">
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value=" ">Scegli il genere</option>
            {movies.map((movie, i) => {
              return (
                <option key={i} value={movie.genre}>{movie.genre}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default MovieSelect