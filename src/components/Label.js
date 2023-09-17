import React from "react";
import nature from "../date.ts"
import style from '../style.scss';
import { SliderContext } from './SliderContext';
function Label () {
    const state = React.useContext(SliderContext)
        return (
            <div className="label">
                {state.nature.map((elem,indexElem)=> {
               const{label,id} =elem
              
               return (
                 <div className={(state.index===indexElem?'circle-color':'circle')} onClick={()=> console.log(state.setIndex(indexElem))}>{label}</div>
               )
            })}
            </div>
            
        )
        
    }

export default Label