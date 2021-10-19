
import React,{ Component } from "react";

import {Stage,Layer,Rect}from 'react-konva';
 class MyRectAni extends Component{
     constructor(){
         super();
         this.state={
             isDragging:false
         }
     }
     changeSize=()=>{
         this.rect.to({
             scaleX:Math.random()+5,
             scaleY:Math.random()+5,
             duration:0.2
         })
         this.setState({
             isDragging:true
         })
     }
     render(){
         return(
             <Rect
            ref={node =>{
                this.rect=node;
            }} 
            width={100}
             height={100}
             fill={this.state.isDragging?'orange':'blue'}
            //  stroke="brown"
            //  strokeWidth={10}
             draggable
             onDragEnd={this.changeSize}
             onDragStart={this.changeSize}/>
         );
     }

}

const Animation =()=>{
    
        return(
            <div className="container mt-5">
    
        <Stage
        width={window.innerWidth}
        height={window.innerHeight}>
            <Layer>
            <MyRectAni/>
        
            </Layer>
        </Stage>
</div>
    );
}


export default Animation;