import React from 'react';
import { HashRouter,Route } from 'react-router-dom';
import Rectangle from './rectcircle';
import Header from './header';
import CustomSh from './custom';
import DragStar from './star';
import DragRectCir from './circledrag';
import RefApi from './konvanodrefapi';
import Drawing from './freedrawing';
import TransformRectangle from './transformer';
import ColoredRect from './complexanimation';
import Animation from './simpleani';
// import Zindex from './zindex';
import ImageToCanvas from './domimtocanvas';
import FilteringImage from './filter';
import Images from './images';
import FourShape from './rectcirstarpolygon';
import Rotation from './rotation';
import Image1 from './image';
import Zindex1 from './zindex';
import Zindex2 from './zindexrect';
// import Scaling from './scaling';


function App() {
  return <HashRouter>
    <Header/>
    <Route path="/rectcircle" component={Rectangle}/>
    <Route path="/custom" component={CustomSh}/>
    <Route path="/star" component={DragStar}/>
    <Route path="/circledrag" component={DragRectCir}/>
    <Route path="/konvanodrefapi" component={RefApi}/>
    <Route path="/freedrawing" component={Drawing}/>
    {/* <Route path="/animation1" component={Animation1}/> */}
    <Route path="/transformer" component={TransformRectangle}/>
    <Route path="/simpleani" component={Animation}/>
    <Route path="/complexAnimation" component={ColoredRect}/>
    <Route path="/zindex" component={Zindex1}/>
    <Route path="/domimtocanvas"  component={ImageToCanvas}/>
    <Route path="/filter"  component={FilteringImage}/>
    <Route path="/images"  component={Images}/>
    <Route path="/rectcirstarpolygon"  component={FourShape}/>
    <Route path="/rotation"  component={Rotation}/>
    <Route path="/image"  component={Image1}/>
    <Route path="/zindexrect"  component={Zindex2}/> 



  </HashRouter>
}

export default App;
