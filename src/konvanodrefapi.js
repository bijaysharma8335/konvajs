import React from 'react';

import { Stage, Layer, Circle,Rect } from 'react-konva';

const pulseShape = (shape) => {
  
  shape.to({
    scaleX: 6,
    scaleY: 6,
    onFinish: () => {
      shape.to({
        scaleX: 1,
        scaleY: 1,
      });
    },
  });
};

const RefApi = () => {
  // const circleRef = React.useRef(null);

 const handleCircleClick = (e) => {
    
    const shape = e.target;
    pulseShape(shape);
    
    e.cancelBubble = true;
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
     
    >
      <Layer>
        
        <Circle
          // ref={circleRef}
          x={window.innerWidth / 2} 
          y={window.innerHeight / 2}
          radius={80}
          fill="blue"
          rotation={+90}
          onClick={handleCircleClick}
          
        />
        <Rect
        width={100}
        height={200}
        x={200}
        y={300}
        fill="pink"
        stroke="red"
        strokeWidth={10}
        onClick={handleCircleClick}
       
      />
        
      </Layer>
    </Stage>
  );
};

export default RefApi;