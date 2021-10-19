import React from 'react';
import { Stage, Layer, Rect,  Line } from 'react-konva';
 const Rectangle=()=>{
     return(
  <div className="container mt-5">
    <Stage
     width={window.innerWidth} 
     height={window.innerHeight}
     >
      <Layer>
        <Line
          x={20}
          y={200}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          
          closed
          stroke="black"
          draggable
           fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'blue', 1, 'pink']}
      />
        
       <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="orchid"
          shadowBlur={10}
          draggable="true"
        />
 
      </Layer>
    </Stage>
  </div>
  );
}
export default Rectangle;