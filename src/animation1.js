import React  from 'react';
import { Stage,Layer,Rect } from 'react-konva';
 
const Animation1 =()=>{
    changeSize=()=>{
        this.rect.to({
            scaleX:Math.random(),
            scaleY:Math.random(),
            // duration:5
        })
    };
    
    return(
            <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}>
                <Layer>
                    <Rect
                        // ref={node }
                    
                        width={window.innerWidth}
                        height={window.innerHeight}
                        fill="purple"
                        draggable
                        onDragStart={this.changeSize()}
                        onDragEnd={this.changeSize()}
                    />
            </Layer>
            </Stage>
        );


    }



export default Animation1;
