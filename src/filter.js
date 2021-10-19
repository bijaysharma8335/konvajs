import Konva from 'konva';
import React,{Component}  from 'react';
import {Stage,Layer,Star} from 'react-konva';
// const pulseShape=(shape)=>{
//     shape.to({
//         scaleX:9,
//         scaleY:9,

    
//     onFinish:()=>{
//         shape.to({
//             scaleX:1,
//             scaleY:1
//         })
//     }})
// }
// const RefApi=()=>{
//     handle1Click=(e)=>{
//         const shape=e.target;
//         pulseShape(shape);
//         e.cancelBubble=true;

//     }
// }


class FilterRect extends Component{
    state = {
        color: 'blue'
    };
    
    // applyCache(){
    //     this.rect.cache();
    // }
    // componentDidMount(){
    //     this.applyCache();
    // }

    handleClick = () => {

        this.setState({
            color:Konva.Util.getRandomColor(),

        },
        // ()=>{
        //     this.applyCache();

        // }
        );
    };

   
    render(){
        return(
    
        <Star 
        //  filters={[Konva.Filters.Noise]}
        
        x={200}
        y={10}
        width={500}
        height={500}
        innerRadius={400}
        outerRadius={490}
        numPoints={50}
        draggable="true"
        fill={this.state.color}
        shadowBlur={10}
        ref={(node)=>{
            this.rect=node;
        }}
        onClick={this.handleClick}
        

        />

    );

}}

 const FilteringImage=()=> {

   
        return(
            <div className="contaier mt-5">
                <Stage 
                width={window.innerWidth}
                height={window.innerHeight}>
                    <Layer>

                        
                        <FilterRect/>
                        
                    </Layer>
                </Stage>
            </div>
        );
    

}
export default FilteringImage;