import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

function useScroll() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start('show');
  } else {
    controls.start('hide');
  }
  return [element, controls];
}

export default useScroll;
