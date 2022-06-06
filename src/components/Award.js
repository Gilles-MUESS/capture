import React from 'react';
import styled from 'styled-components';

function Award({ award }) {
  return (
    <StyledAward>
      <h3>{award.title}</h3>
      <div className='line'></div>
      <p>{award.description}</p>
    </StyledAward>
  );
}

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding-top: 2rem 0;
  }
`;

export default Award;
