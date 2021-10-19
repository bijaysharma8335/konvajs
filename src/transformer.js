import React, { useState} from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { Stage,Layer,Rect,Transformer } from 'react-konva';

const TransformerRect=({shapeProps,isSelected,onSelect,onChange})=>{
    const shapeRef=useRef();
    const trRef=useRef();

    useEffect(() => {
       if(isSelected){
           trRef.current.nodes([shapeRef.current]);
           trRef.current.getLayer().batchDraw();
       }

       
    }, [isSelected]);

    return(
       <React.Fragment>
           <Rect onClick={onSelect}
           
           ref={shapeRef}
           {...shapeProps}
           draggable
           onDragEnd={(e)=>{
               onChange({
                   ...shapeProps,
                   x:e.target.x(),
                   y:e.target.y(),
               });
           }}
           onTransformEnd={(e)=>{
               const node=shapeRef.current;
               const scaleX=node.scaleX();
               const scaleY=node.scaleY();
               node.scaleX(1);
               node.scaleY(1);

               onChange({
                   ...shapeProps,
                   x:node.x(),
                   y:node.y(),
                   width:Math.max(5,node.width()*scaleX),
                   height:Math.max(5,node.width()*scaleY)
               })
           }}
            />

            {isSelected && (
                <Transformer 
                ref={trRef}
                boundBoxFunc={(oldBox,newBox)=>{
                    if(newBox.width < 5 && newBox.height < 5){
                        return oldBox;
                    }
                    return newBox;
                }}
                />
            )}
       </React.Fragment>
        );
    }

       const initialRectangle=[{
           x:10,
           y:10,
           width:150,
           height:150,
           fill:'pink',
           id:'rect1'
       },
    {
        x:50,
        y:50,
        width:200,
        height:200,
        fill:'blue',
        id:'rect2'
    }];


    const TransformRectangle=()=>{
        const[rectangles,setRectangles]=useState(initialRectangle);
        const[selectedId,selectShape]=useState(null);

       const checkDeSelect=(e)=>{
            const clickOnEmpty=e.target===e.target.getStage();
            if(clickOnEmpty){
                selectShape(null);
            }

            };

        
        return(
            <Stage 
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={checkDeSelect}
            onMouseUp={checkDeSelect}

            >
            <Layer>
                {
                    rectangles.map((rect,i)=>{
                        return(
                            <TransformerRect key={i}
                            shapeProps={rect}
                            isSelected={rect.id == selectedId}
                            onSelect={()=>{
                                selectShape(rect.id);
                            }}
                            onChange={(newAttrs)=>{
                                const rects=rectangles.slice();
                                rect[i]=newAttrs;
                                setRectangles(rects);

                            }}
                            />

                        )
                    })
                }
            </Layer>
            </Stage>
        );

    }

       
   

export default TransformRectangle;