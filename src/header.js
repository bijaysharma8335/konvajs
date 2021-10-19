import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>
{
	return(<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <Link className="navbar-brand" to="#">Fixed navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div ClassName="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       
	  <Link className="nav-link" to="/rectcircle">Rectangle</Link>
	  </li>
      <li className="nav-item">
	  <Link className="nav-link" to="/custom">CustomSh</Link>
	  </li>
   
      <li className="nav-item">
	  <Link className="nav-link" to="/star">DragStar</Link>
	  </li>
      <li className="nav-item">
	  <Link className="nav-link" to="/circledrag">DragRectCir</Link>
	  </li>
      <li className="nav-item">
	  <Link className="nav-link" to="/konvanodrefapi">RefApi</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/freedrawing">Drawing</Link>
	  </li>

       <li className="nav-item">
	  <Link className="nav-link" to="/transformer">TransformShape</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/simpleani">Animation</Link>
	  </li> 
    <li className="nav-item">
	  <Link className="nav-link" to="/complexanimation">ComplexAnimation</Link>
	  </li> 
    <li className="nav-item">
	  <Link className="nav-link" to="/zindex">Zindex1</Link>
	  </li> 
    <li className="nav-item">
	  <Link className="nav-link" to="/domimtocanvas">ImageToCanvas</Link>
	  </li> 
	  <li className="nav-item">
	  <Link className="nav-link" to="/filter">FilteringImage</Link>
	  </li> 
	  <li className="nav-item">
	  <Link className="nav-link" to="/images">Images</Link>
	  </li> 
	  <li className="nav-item">
	  <Link className="nav-link" to="/rectcirstarpolygon">FourShape</Link>
	  </li> 
	  <li className="nav-item">
	  <Link className="nav-link" to="/image">ImageR</Link>
	  </li> 
	   <li className="nav-item">
	  <Link className="nav-link" to="/zindexrect">Zindex2</Link>
	  </li>  

	 
    </ul>
  
    
  </div>
</nav>
);
}


export default Header;