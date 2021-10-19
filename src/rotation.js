import React,{Component} from 'react';
import { Stage,Layer,Shape} from 'react-konva';
class Rotation extends Component{
    constructor(){
        super();
        this.state={
            rotate:false
        }
    }

    rotatingDone=()=>{
        this.setState({
            rotate:true
            
        })
    }
render(){
    
    
    return(
    <Stage
    width={window.innerWidth}
    height={window.innerHeight}>
        <Layer>
            <Shape
            sceneFunc={(context,shape)=>{
                context.beginPath();
                context.moveTo(300,400);
                context.lineTo(200,700);
                context.quadraticCurveTo(200,300,500,900);
                context.closePath();
                context.fillStrokeShape(shape);

            }}
            fill="red"
           
              onClick={() => this.setState({ rotate: true })}
              
            draggable
            />
        </Layer>
    </Stage>
    );
}
}
export default Rotation;