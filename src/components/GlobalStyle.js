import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }

  body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
  button {
    font-weight: 700;
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  h2 {
    font-weight: 200;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-size: 2rem;
    font-weight: 700;
  }
  span {
    font-weight: 700;
    color: #23d997;
  }
  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  a {
    font-size: 1.1rem;
    font-weight: 300;
  }
  `;

export default GlobalStyle;
