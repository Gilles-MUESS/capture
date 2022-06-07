import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function Nav() {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/about' || pathname === '/' ? '50%' : '0%',
            }}
          />
        </li>
        <li>
          <Link to='/work'>2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0 3rem;
    position: relative;
    &:last-child {
      padding-right: 0;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: 200;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    ul {
      padding: 2rem;
      justify-content: center;
      width: 100%;
      li {
        padding: 1rem;
        text-align: center;
        &:last-child {
          padding-right: 1rem;
        }
      }
    }
    #logo {
      margin: 1rem;
      display: inline-block;
    }
  }
  @media (max-width: 600px) {
    ul {
      flex-direction: column;
      align-items: center;
      li {
        width: fit-content;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 3rem;
  @media (max-width: 1300px) {
    bottom: -20%;
    left: 1rem;
  }
  @media (max-width: 600px) {
  }
`;

export default Nav;
