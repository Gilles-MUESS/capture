import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { fade, photoAnimation, lineAnimation, slider } from '../animation';
import useScroll from '../components/useScroll';

function Movie({ movie }) {
  const [element, controls] = useScroll();

  return (
    <StyledMovie
      ref={element}
      variants={fade}
      animate={controls}
      initial='hidden'
    >
      <motion.h2 variants={fade}>{movie.title}</motion.h2>
      <motion.div variants={lineAnimation} className='line'></motion.div>
      <Link to={movie.url}>
        <Hide>
          <motion.img
            variants={photoAnimation}
            src={movie.mainImg}
            alt={movie.title}
          />
        </Hide>
      </Link>
    </StyledMovie>
  );
}

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default Movie;
