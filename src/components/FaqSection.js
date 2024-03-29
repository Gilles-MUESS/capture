import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { motion, LayoutGroup } from 'framer-motion';
import useScroll from './useScroll';
import { scrollReveal } from '../animation';

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <h2>
        Any Questions ? <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title='How do I start ?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
        </Toggle>

        <Toggle title='Payment methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
        </Toggle>

        <Toggle title='What products do you offer ?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
        </Toggle>

        <Toggle title='How do you work ?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus amet eligendi temporibus perspiciatis laudantium totam
              reiciendis labore neque quibusdam officia at libero maxime beatae
              magnam veritatis, aliquid debitis pariatur sed.
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
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
