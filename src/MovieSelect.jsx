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
        <div className="col-12">
          <h1>Lista dei film</h1>
        </div>
        <div className="col-12">
          <select className="form-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value=" ">Scegli il genere</option>
            {movies.map((movie, i) => {
              return (
                <option key={i} value={movie.genre}>{movie.genre}</option>
              )
            })}
          </select>
          <div className="col-12">
            <div className="list-group mt-3">
              <ul>
                {movies.map((movie, i) => {
                  return (
                    <li key={i} className="list-group-item">{movie.title}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieSelect