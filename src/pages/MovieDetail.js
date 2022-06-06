import { useState, useEffect, React } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';
import Award from '../components/Award';

function MovieDetail() {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movie, movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Presentation>
            <h3>Presentation</h3>
            <div className='line'></div>
            <div
              className='presentation-content'
              dangerouslySetInnerHTML={{ __html: movie.content }}
            />
          </Presentation>
          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Presentation = styled.div`
  min-height: 90vh;
  padding: 20vh 10rem 0;
  position: relative;
  h3 {
    font-size: 2rem;
  }
  .line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  p {
    padding: 1.5rem 0;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
