import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { Spring, animated } from '@react-spring/konva';

class Colored extends Component {
  state = { flag: false };
  handleClick = () => this.setState( state => ({ flag: !state.flag }) );
  render() {
    const { flag } = this.state;
    return (
      <Spring
       
        // from={{ x: 0, shadowBlur: 0, fill: 'rgb(80,80,100)' }}

        to={{
          x: flag ? 150 : 50,
          y:flag ? 200 : 50,
          shadowBlur: flag ? 25 : 5,
          fill: flag ? 'green' : 'orange',
          radius:flag?300:50,
           width: flag ? 600 : 50,
            height: flag ? 600 : 50
        }}
      >
        {props => (
          <animated.Circle {...props} y={100} onClick={this.handleClick} />
        )}
      </Spring>
    );
  }
}

const ColoredRect=()=>{
  
    return (
        <div className="container mt-5">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          
          <Colored />
        </Layer>
      </Stage>
      </div>
    );
  }

export default ColoredRect;
