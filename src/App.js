
import React, { useEffect, useState, useContext, createContext } from 'react';
import BtnSlide from './components/BtnSlide';
import date from './date.ts';
import Home from './components/Home';

import { SliderContext } from './components/SliderContext';


function App() {
  const [nature, setNature] = useState(date);
  const [index, setIndex] = useState(0);
  const [autoPage, setAutoPage] = useState(false);
 

  const lastIndex = nature.length - 1;

  useEffect(() => {
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, nature]);

  useEffect(() => {
    if (autoPage === true) {
      let slider = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 1000);

      if (index > lastIndex && autoPage===false ) {
        setIndex(0);
        clearInterval(slider);
        setAutoPage(false);
      }
      return () => {
        clearInterval(slider);
      };
    }
  }, [index, nature, autoPage]);
// const SliderContext = createContext('')

  return (
<SliderContext.Provider value={{nature,index,setIndex, setAutoPage}}>
<>
<Home />


</>
</SliderContext.Provider>

  )
 
}

export default App;
