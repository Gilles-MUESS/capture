import React from 'react';
import useScroll from './useScroll';
//Images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { scrollReveal } from '../animation';

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='Camera' />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
