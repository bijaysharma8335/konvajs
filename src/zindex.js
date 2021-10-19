import Konva from 'konva';
import React,{Component} from 'react';
import {Stage,Layer,Circle} from 'react-konva';

function generateItems(){
    const items=[];
    for(let i=0;i<50;i++){
        items.push({
            x:Math.random() * window.innerWidth,
            y:Math.random() * window.innerHeight,
            id:'node-' +i,
            color:Konva.Util.getRandomColor()
        })
    }
    return items;
}


class Zindex1 extends Component{
    state={
        items:generateItems()
    }

    // handleDragStart=(e)=>{
    //     const id=e.target.name();
    //     const items=this.state.items.slice();
    //     const item =items.find(i=>i.id===id);
    //     const index=items.indexOf(item);
    //     items.splice(index,1);
    //     items.push(item);
    //     this.setState({
    //         items
    //     })

    // }

    handleDragEnd=(e)=>{
        const id=e.target.name();
        const items=this.state.items;
        const item =this.state.items.find(i=>i.id===id);
        const index=this.state.items.indexOf(item);
        items[index]={
            ...item,
            x:e.target.x(),
            y:e.target.y()
        }
        this.setState({
            items
        })

    }
    
    render(){
        return(
            <Stage width={window.innerWidth}
            height={window.innerHeight}>
                <Layer>
                    {this.state.items.map(item=>(
                         <Circle
                    key={item.id}
                    name={item.id}
                    draggable
                    x={item.x}
                    y={item.y} 
                    fill={item.color}
                    radius={60}
                    // onDragStart={this.handleDragStart}
                    onDragEnd={this.handleDragEnd}
                    /> 
                    ))}
                    
                </Layer>

            </Stage>
        );

    }

}
export default Zindex1;