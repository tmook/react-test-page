import React from 'react';
import * as CONST from '../util/Constants.js';


class GoogleMap extends React.Component{
  constructor(props){
    super(props);

    this.defaultConfig = {
      center: {
        lat: 21.299772, 
        lng: -157.815886
      },
      zoom: 8,
      mapSize: {
        width: "500px",
        height: "300px"
      }
    };

    this.mapMarkers = [];

    this.load = this.load.bind(this);
    this.error = this.error.bind(this);
  }

  /* callback for successful load */
  load(response){
    //double check google object is avaliable
    if(typeof(google) === 'object'){
      //load map with settings and save to this.map variable
      this.map = new google.maps.Map(
        this.refs.map, 
        { center: this.props.center ? this.props.center : this.defaultConfig.center, 
          zoom: this.props.zoom ? this.props.zoom : this.defaultConfig.zoom 
        }
      );
      this.loadMarkers(this.props.markers);
      this.showMarkers();
    }else{
      console.log(
        'google maps script loaded, but unable to find google.maps object'
      );
    }
  }

  error(response){
    console.log("unable to load google maps script");
  }

  /* wait until component did mount to ensure 'map' ref is available */
  componentDidMount(){
    //check if google.maps is already loaded, if not build and load maps script
    if( !(typeof(google)==='object') || !(typeof(google.maps)==='object') ){
      //create script element
      const maps_googleapis_script = document.createElement('script');

      //add script attributes
      maps_googleapis_script.async = 1;
      maps_googleapis_script.defer = 1;
      maps_googleapis_script.onload = (response) => (this.load(response));
      maps_googleapis_script.onerror = (response) => (this.error(response));
      maps_googleapis_script.src = 
        "https://maps.googleapis.com/maps/api/js?key=" + 
        process.env.GOOGLE_API_KEY;
      
      //load script directly on to DOM
      document.body.appendChild(maps_googleapis_script);
    }
  }

  componentWillUnmount(){
    //remove google.maps.event listeners
  }

  /* this should trigger when GoogleMaps state.center is updated */
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.center !== this.props.center) {
      this.panToCenter(this.props.center);
    }
    if(prevProps.markers !== this.props.markers) {
      this.clearMarkers();
      this.loadMarkers(this.props.markers);
      this.showMarkers();
    }
  }

  panToCenter(newCenter){
    //recenter map over new center
    this.map.panTo(newCenter);
  }

  loadMarkers(markers){
    if(markers.length > 0 ){
      markers.forEach( marker => {
        const m = new google.maps.Marker({
          position: {lat:marker.lat, lng:marker.lng},
          map: this.map,
          icon: CONST.MARKERS[marker.color]
        });

        this.mapMarkers.push(m);
      });
    }
  }

  setMarkers(map){
    this.mapMarkers.forEach( marker => marker.setMap(map) );
  }

  showMarkers(){
    this.setMarkers(this.map);
  }

  clearMarkers(){
    this.setMarkers(null);
    this.mapMarkers = [];
  }

  render() {
    return ( 
      <div 
        style={this.props.mapSize ? this.props.mapSize : this.defaultConfig.mapSize} 
        ref='map'>
        google maps
      </div> 
    );
  }

}

export default GoogleMap;

