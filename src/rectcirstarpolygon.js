import Konva from 'konva';
import React,{Component} from 'react';
import {Stage,Layer,Rect,Circle,Star,RegularPolygon} from 'react-konva';
import { Spring,animated } from '@react-spring/konva';
const pShape=(shape)=>{
    shape.to({
        scaleX:6,
        scaleY:6,

        onFinish:()=>{
    shape.to({
        scaleX:1,
        scaleY:1
       })
    },
    })

}
// class Polygon extends Component{
//     render(){
        
//         <Spring 
//     >
//         </Spring>
//     }
// }


class FourShape extends Component{
    constructor(){
        super();
        this.state={
            color:'lightgreen',
            x:50,
            y:60,
            width:100,
            height:400,
            radius:40,
            isDragging:false

        }
    }
    
    // applyCache(){
    //     this.rect.cache();
    // }
    // componentDidMount(){
    //     this.applyCache();
    // }
    
    rectClick=()=>{
     this.setState({
        color:Konva.Util.getRandomColor(),
     },
    //  ()=>{
    //      this.applyCache();
     //}
     )    

    }
    cirClick=(e)=>{
        const shape=e.target;
        pShape(shape);
        

    }
    starClick=(e)=>{
        const shape=e.target;
        pShape(shape);
  }

  polyClick=(e)=>{
      const shape=e.target;
      pShape(shape);
  }
      
      

  
    render(){
        return(
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}>
                <Layer>
      
                  <Rect  
                //   filters={[Konva.Filters.Noise]} 
                    //  noise={1} 
                    x={50}
                    y={50}
                    width={240}
                    height={250}
                    fill={this.state.color}
                   
                    draggable
                    ref={(node)=>{
                        this.rect=node;
                    }} 
                    onClick={this.rectClick}
                    />
                   

                   
                     <Circle
                    x={window.innerWidth /2}
                    y={window.innerHeight/2}
                    width={200}
                    height={300}
                    radius={80}
                    fill="green"
                    draggable
                    rotation={+90}
                    onClick={this.cirClick}/>

                    <RegularPolygon
                    x={200}
                    y={200}
                    sides={6}
                    radius={80} 
                    fill="purple"
                    draggable
                    onClick={this.polyClick}/>
                     <Star
                    x={100}
                    y={100}
                    innerRadius={70}
                    outerRadius={80}
                    numPoints={20}
                    fill={this.state.isDragging?'blue':'red'}
                    draggable
                    onDragStart={()=>{
                        this.setState({
                            isDragging:true
                        })

                    }}
                    onDragEnd={()=>{
                        this.setState({
                            isDragging:false,
                        })

                    }}
                    onClick={this.starClick}
                    />
                </Layer>
            </Stage>
        );
    }

}
export default FourShape;