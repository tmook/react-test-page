import React from 'react';
import ThreeJSCubeScene from './ThreeJSCubeScene.jsx';


function ThreeJS(props){
  return ( 
    <div>
      <span>{props.title != null ? props.title : "Three JS"}</span>
      <ThreeJSCubeScene />
    </div>
  );
}

export default ThreeJS;
