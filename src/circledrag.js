import React,{Component} from 'react';
import { Stage,Layer,Circle, Rect } from 'react-konva';
class DragRectCir extends Component{
constructor(){
    super();
    this.state={
        x:50,
        y:60,
        width:100,
        height:400,
        radius:40,
        isDragging:false
    }
}
render(){
    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect
               
                x={this.state.x}
                y={this.state.y}
                width={this.state.width}
                height={this.state.height}


                draggable

                fill={this.state.isDragging?'green':'blue'}
                
                onDragStart={()=>{
                    this.setState({
                        isDragging:true
                    });
                }}
                onDragEnd={e=>{
                this.setState({
                    isDragging:false,
                   
                })
            }
        }
                    
                />
                 <Circle
               
               x={50}
               y={100}
               width={80}
               height={50}
               radius={60}


               draggable

               fill={this.state.isDragging?'red':'purple'}
               
               onDragStart={()=>{
                   this.setState({
                       isDragging:true
                   });
               }}
               onDragEnd={e=>{
               this.setState({
                   isDragging:false,
                  
               })
           }
       }
                   
               />
               
            </Layer>
        </Stage>
        
    );
}
}
export default DragRectCir;