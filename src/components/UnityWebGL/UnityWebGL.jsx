import React from 'react';
import UnityWebGLPlayer from './UnityWebGLPlayer.jsx';


function UnityWebGL(props){
  return ( 
    <div>
      <span>{props.title != null ? props.title : "Unity WebGL"}</span>
      <UnityWebGLPlayer />
    </div>
  );
}

export default UnityWebGL;
