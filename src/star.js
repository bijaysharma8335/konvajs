import React,{ useState} from 'react';
import { Stage, Layer, Star} from 'react-konva';

function generateShape(){
  return [...Array(300)].map((x,i) => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    isDragging: false,

  })
  );

}


const INITIAL_STATE=generateShape();

const DragStar=()=>{
  const[stars,setStars]=useState(INITIAL_STATE);

  const handleDragStart=  (e)=>{
    const id=e.target.id();
    setStars(
      stars.map((star)=>{
        return { ...star,
          isDragging:true
        };
      })
    );

  };
  const handleDragEnd=(e)=>{
    setStars(
      stars.map((star)=>{
      return{
        ...star,
        isDragging:false,
      };
    })
    );

  };

  
  return(
    <Stage width={ window.innerWidth} height={window.innerHeight}>
      <Layer>
        {stars.map((star)=>(
        <Star
        key={star.id}
        id={star.id}
        x={star.x}
        y={star.y}
        numPoints={ 25 }
        innerRadius={ 20 }
        outerRadius={ 40 }
        fill="orange"
        opacity={1}
        draggable
        // rotation={star.rotation}
        shadowColor="red"
        shadowBlur={10}
        shadowOffsetX={ star.isDragging? 10 : 5 }
        shadowOpacity={ 0.6 }
        shadowOffsetY={ star.isDragging ? 10 : 5 }
        scaleX={star.isDragging ? 1.2 : 1 }
        scaleY={star.isDragging ? 1.2 : 1 } 
        onDragStart={ handleDragStart }
        onDragEnd={ handleDragEnd }
                              
        />
        ))}
      </Layer>

    </Stage>
  );

}
export default DragStar;