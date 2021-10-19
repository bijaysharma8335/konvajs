import Konva from 'konva';
import React,{Component} from 'react';
import {Stage,Layer,Rect} from 'react-konva';

function generateItems(){
    const items=[];
    for(let i=0;i<100;i++){
        items.push({
            x:Math.random() * 200,
            y:Math.random() * 300,
            id:'node-' +i,
            color:Konva.Util.getRandomColor()
        })
    }
    return items;
}


class Zindex2 extends Component{
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
        const items=generateItems();
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
                         <Rect
                    key={item.id}
                    name={item.id}
                    draggable
                    x={item.x}
                    y={item.y} 
                     width={item.x}
                     height={item.x}
                    fill={item.color}
                   
                    // onDragStart={this.handleDragStart}
                    onDragEnd={this.handleDragEnd}
                    /> 
                    ))}
                    
                </Layer>

            </Stage>
        );

    }

}
export default Zindex2;