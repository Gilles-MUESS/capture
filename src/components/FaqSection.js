import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

function FaqSection() {
  return (
    <Faq>
      <div className='description'>
        <h2>
          Any Questions ? <span>FAQ</span>
        </h2>
        <div className='question'>
          <h4>How do I start ?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
          <div className='faq-line'></div>
        </div>
        <div className='question'>
          <h4>Payment methods</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
          <div className='faq-line'></div>
        </div>
        <div className='question'>
          <h4>What products do you offer ?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
          <div className='faq-line'></div>
        </div>
        <div className='question'>
          <h4>How do you work ?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
          <div className='faq-line'></div>
        </div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: 200;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
