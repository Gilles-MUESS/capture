import React from 'react';

import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

function ContactUs() {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Facebook</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Twitter</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send an email</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export default ContactUs;
