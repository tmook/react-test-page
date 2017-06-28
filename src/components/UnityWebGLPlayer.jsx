import React from 'react';


class UnityWebGLPlayer extends React.Component{
  constructor(props){
    super(props);

    this.defaultConfig = {
      playerStyle: {
        width: "500px",
        height: "500px",
        margin: "auto"
      }
    };

    this.load = this.load.bind(this);
    this.error = this.error.bind(this);
  }
  
  /* callback for successful load */
  load(response){
    //double check UnityLoader object is avaliable
    if(typeof(UnityLoader) === 'object'){
      //load game instance with settings and save to this.gameInstance variable
      this.gameInstance = UnityLoader.instantiate(this.refs.gameContainer, 
                                                  "./assets/unity/Builds.json");
    }else{
      console.log(
        'unity loader script loaded, but unable to find UnityLoader object'
      );
    }
  }

  error(response){
    console.log("unable to load unity loader script");
  }

  /* wait until component did mount to ensure 'gameContainer' ref is available */
  componentDidMount(){
    //check if UnityLoader is already loaded, if not build and load UnityLoader script
    if( !(typeof(UnityLoader)==='object') ){
      //create script element
      const UnityLoader_script = document.createElement('script');

      //add script attributes
      UnityLoader_script.onload = (response) => (this.load(response));
      UnityLoader_script.onerror = (response) => (this.error(response));
      UnityLoader_script.src = "./assets/unity/UnityLoader.js";
      
      //load script directly on to DOM
      document.body.appendChild(UnityLoader_script);
    }
  }

  componentWillUnmount(){
    //remove UnityLoader event listeners
  }

  render(){
    return ( 
      <div 
        style={this.props.style ? this.props.style : this.defaultConfig.playerStyle}
        ref="gameContainer">
        unity player
      </div>
    );
  }
}

export default UnityWebGLPlayer;

