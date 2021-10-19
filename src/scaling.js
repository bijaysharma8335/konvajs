import React,{useState} from 'react';
import { Stage,Layer,RegularPolygon } from 'react-konva';
import {Spring,animated} from 'react-spring'

function generateShape(){
  return[...Array].map((x,index)=>({
    x:window.innerWidth,
    y:window.innerHeight,
    isDragging:false

  }))
}
const INITIAL_STATE=generateShape();
const Scaling1=()=>{
const[scale,changeScale]=useState(INITIAL_STATE);
handleClick=()=>{
  changeScale(scale);
}


   
    return(
        <Stage width={window.innerWidth}
        height={window.innerHeight}
      >
          <Layer>
            <Spring
            to>
              <RegularPolygon
              width={window.innerWidth}
              height={window.innerHeight}
              x={300}
              y={400}
              radius={100}
              sides={9}
              fill="red"
              stroke="blue"
              strokeWidth={10}
              draggable
              onClick={handleClick}
             
            />
            </Spring>
          </Layer>
        </Stage>

    );

}
export default Scaling1;