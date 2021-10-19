import React,{useState}from 'react';
import { Stage,Layer,Line,Text } from 'react-konva';

const Drawing=()=>{

    const[tool,setTool]=useState('pen');
    const[lines,setLines]=useState([]);
    const isDrawing=React.useRef(false);

    
    const handleMouseDown=(e)=>{
        isDrawing.current=true;
        const pos=e.target.getStage().getPointerPosition();
        setLines([...lines, {tool, points: [pos.x,pos.y] }])
    };

    
    const handleMouseMove=(e)=>{
       if(!isDrawing.current){
           return;
       }
       const stage=e.target.getStage();
       const point=stage.getPointerPosition();
       let lastLine=lines[lines.length - 1];

       lastLine.points=lastLine.points.concat([point.x,point.y]);//sdd point

       lines.splice(lines.length -1,1, lastLine);//replace last
       setLines(lines.concat());

    };

    const handleMouseUp=()=>{
        isDrawing.current=false;

    }

    return(
        <div className="container mt-5">
            <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            > 
            <Layer>
                <Text text="Start Drawing" x={100} y={100}
                draggable={true}/>
               {
               lines.map((line,i)=>(
                   <Line key={i}
                   points={line.points}
                   stroke="black"
                   strokeWidth={5}
                   tension={0.5}
                   lineCap="round"
               
                   />

               ))}
            </Layer>

            </Stage>
            <br/>
            <br/>
            <select
            value={tool}
            onChange={(e)=>{
                setTool(e.target.value);
            }}
            > <br/>
            <br/>  <option value="pen">Pen</option>
                <option value="eraser">Eraser</option>
            </select>
        </div>
    );

}
export default Drawing;