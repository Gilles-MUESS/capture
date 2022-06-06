import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
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
        </li>
        <li>
          <Link to='/work'>2. Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
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
  position: relative;
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
`;

export default Nav;
