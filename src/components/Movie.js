import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Movie({ movie }) {
  return (
    <StyledMovie>
      <h2>{movie.title}</h2>
      <div className='line'></div>
      <Link to={movie.url}>
        <img src={movie.mainImg} alt={movie.title} />
      </Link>
    </StyledMovie>
  );
}

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Movie;
