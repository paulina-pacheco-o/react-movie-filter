import React from "react";

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

const MovieSelect = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <h1>Lista dei film</h1>
        </div>
        <div className="col-100">
          <select>
            <option value=" ">Scegli il genere</option>
            {movies.map((movie) => {
              return (
                <option value={movies.genre}>{movies.genre}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default MovieSelect