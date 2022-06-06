import { useState, useEffect, React } from 'react';
import styled from 'styled-components';
import { MovieState } from '../movieState';
import Movie from '../components/Movie';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import styledComponents from 'styled-components';

function OurWork() {
  const [movies, setMovies] = useState(MovieState);

  return (
    <Work>
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

export default OurWork;
