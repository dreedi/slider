
import React from "react";
import { SliderContext } from './SliderContext';
import style from '../style.scss';

function BtnSlide() {
    const state = React.useContext(SliderContext)
    return(
        <div className="btn-options ">
            <button className="options"  onClick={() => {state.setAutoPage((prev) => !prev);}}>Start/Stop</button>
      <button  className="options" onClick={() => {state.setIndex(0);}}>Reset</button>
        </div>
    )
}
export default BtnSlide