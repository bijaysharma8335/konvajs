import React,{useState,useRef} from 'react';
import { Stage,Layer } from 'react-konva';
import useImage from 'use-image';
import { Image } from 'react-konva';


const URLImage=({ image })=>{
    const [img]=useImage(image.src);
    return(
    <Image
            image={img}
            x={image.x}
            y={image.y}
            offsetX={img ? img.width / 2 :0 } 
            offsetY={img ? img.height / 2:0 }
        />
    );

}

const ImageToCanvas=()=>{
    const dragUrl=useRef();
    const stageRef=useRef();
    const[images,setImages]=useState([]);
    return(
        <div>
            <img 
            alt="girl"
            src="2.jpg"
            draggable="true"
            onDragStart={(e)=>{
            dragUrl.current=e.target.src;
            }}
            />


            <div
            onDrop={(e)=>{
                e.preventDefault();
                stageRef.current.setPointersPositions(e);
                setImages(
                    images.concat([
                        {
                        ...stageRef.current.getPointerPosition(),
                        src:dragUrl.current,
                    },
                    ])
                )
            }}

            onDragOver={(e)=>e.preventDefault()} >

            <Stage width={window.innerWidth}
            height={window.innerHeight}
            style={{ border:'1px solid black'}}
            ref={stageRef}
            >
                <Layer>
                    {images.map((image)=>{
                        return <URLImage image={image}/>
                    })}

                </Layer>
            </Stage>
            </div>
        </div>
    );

}
export default ImageToCanvas;