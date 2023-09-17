import React, { useEffect, useState, useRef } from 'react';
import { SliderContext } from './SliderContext';
import Label from '../components/Label';
import BtnSlide from '../components/BtnSlide';
import style from '../style.scss';

function Home() {
  const state = React.useContext(SliderContext);
  return (
    <>
      <header>
        <div className="title">
          <h2>
            <span>Countries</span>
          </h2>
        </div>
      </header>
      <section className="section">
        <div className="section-center">
          {state.nature.map((element, elementIndex) => {
            const { id, img, land, description, label } = element;

            let position = 'nextSlide';
            if (elementIndex === state.index) {
              position = 'activeSlide';
            }
            if (
              elementIndex === state.index - 1 ||
              (state.index === 0 && elementIndex === state.nature.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article className={position} key={land}>
                <img src={img} alt={land} className="person-img" 
               onTouchEnd ={()=> {
                console.log('asdf')
               }}
                />
                <h4>{land}</h4>
                <p className="title">{description}</p>
              </article>
            );
          })}
          <Label />
          <div className="btn-nav">
            <button className="prev" onClick={() => state.setIndex((prev) => prev - 1)}>
            &laquo;
            </button>
            <button className="next" onClick={() => state.setIndex((prev) => prev + 1)}>
            &raquo;
            </button>
          </div>

          <BtnSlide />
        </div>
      </section>
    </>
  );
}

export default Home;
