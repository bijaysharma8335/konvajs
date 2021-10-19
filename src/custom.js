import React  from 'react';
import { Stage,Layer,Shape } from 'react-konva';
const CustomSh=()=>{
    return(
        <div className="container mt-5">
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Shape
                sceneFunc={(context,shape)=>{
                    context.beginPath();
                    context.moveTo(200,450);//Moves the starting point of a new sub-path to the (x, y) coordinates.
                    context.lineTo(330,80);//Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
                    context.quadraticCurveTo(150,300,660,900);//Adds a quadratic Bézier curve to the current path.
                    context.closePath();
                    context.fillStrokeShape(shape);
                }}
                fill="brown"
                stroke="blue"
                strokeWidth={4}
                draggable/>
            </Layer>
        </Stage>
        </div>
    );

}
export default CustomSh;