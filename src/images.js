import React,{Component} from 'react';
import {Stage,Layer,Image}  from 'react-konva';

class URLImage extends Component {
    constructor(){
        super();
    
    this.state={
        image:''
    };
}
    handleLoad=()=>{
        this.setState({
            image:this.image
        })
    }
    
    loadImage=()=>{
            this.image=new window.Image();
            this.image.src=this.props.src;
            this.image.addEventListener('load',this.handleLoad);
            
            }


    componentDidMount(){
        this.loadImage();
    }
    render(){
        return(
            <Image
            x={this.props.x}
            y={this.props.y}
            image={this.state.image}
            draggable="true"
           />
        );
    }
    
}

class Images extends Component{
    render(){
        return(
            <div className="container ">
        <Stage width={window.innerWidth}
        height={window.innerHeight}
        >
            <Layer>
                <URLImage src = "1.jpg"  x={150} y={100}
                width={500}
                height={500}
                />
            </Layer>

        </Stage>
        </div>
        );
    }
    
}
export  default Images;