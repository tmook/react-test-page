import React from 'react';


class ThreeJSCubeScene extends React.Component{
  constructor(props){
    super(props);

    this.defaultConfig = {
      sceneStyle: {
        width: "500px",
        height: "500px",
        margin: "auto"
      },
      sceneWidth:500,
      sceneHeight:500
    };

    this.load = this.load.bind(this);
    this.error = this.error.bind(this);
  }
  
  /* callback for successful load */
  load(response){
    //double check THREE object is avaliable
    if(typeof(THREE) === 'object'){
      //load the three.js scene 
      this.loadScene();
    }else{
      console.log(
        'three.js script loaded, but unable to find THREE object'
      );
    }
  }

  error(response){
    console.log("unable to load three.js script");
  }

  /* wait until component did mount to ensure 'sceneContainer' ref is available */
  componentDidMount(){
    //check if THREE is already loaded, if not build and load three.js script
    if( !(typeof(THREE)==='object') ){
      //create script element
      const three_script = document.createElement('script');

      //add script attributes
      three_script.onload = (response) => (this.load(response));
      three_script.onerror = (response) => (this.error(response));
      three_script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js";
      
      //load script directly on to DOM
      document.body.appendChild(three_script);
    }
  }

  componentWillUnmount(){
    //remove three.js event listeners
  }

  loadScene(){
    const sceneWidth = this.props.width ?  
      this.props.width : this.defaultConfig.sceneWidth;
    const sceneHeight = this.props.height ?  
      this.props.height : this.defaultConfig.sceneHeight;
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 
      75, 
      sceneWidth/sceneHeight, 
      0.1, 
      1000 
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( sceneWidth, sceneHeight );
    this.refs.sceneContainer.replaceWith(renderer.domElement);

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };

    animate();
  }

  render(){
    return ( 
      <div 
        style={this.props.style ? this.props.style : this.defaultConfig.sceneStyle}
        ref="sceneContainer" 
        dangerouslySetInnerHTML={{__html:"three.js scene"}}>
      </div>
    );
  }
}

export default ThreeJSCubeScene;

