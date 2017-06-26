import React from 'react';
import GoogleMapsMap from './GoogleMapsMap.jsx';
import GoogleMapsAddMakerBar from './GoogleMapsAddMakerBar.jsx';
import GoogleMapsMarkerTable from './GoogleMapsMarkerTable.jsx';


class GoogleMaps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markers: this.props.markers,
      center: this.props.center
    };

    this.handleAddMarker = this.handleAddMarker.bind(this);
    this.handleRemoveMarker = this.handleRemoveMarker.bind(this);
    this.handleMarkerTableClick = this.handleMarkerTableClick .bind(this);
  }

  handleAddMarker(marker_object){
    //append marker_object to markers
    this.setState();
  }

  handleRemoveMarker(marker_id){
    //remove marker with marker id
    this.setState();
  }

  handleMarkerTableClick(marker_id){
    //get lon lat from marker_id
    //save lon lat object
    //life cycle on update? in mapsMap.. update center here
    this.setState();
  }

  render() {
    return ( 
      <div>
        <span>{this.props.title != null ? this.props.title : "Google Maps"}</span>
        <GoogleMapsMap 
          mapSize={this.props.mapSize} 
          center={this.state.center}
          markers={this.state.markers}/>
        <GoogleMapsAddMakerBar 
          handleAddMaker={this.handleAddMarker} />
        <GoogleMapsMarkerTable 
          markers={this.state.markers} 
          handleRemoveMarker={this.handleRemoveMarker} 
          handleMarkerTableClick={this.handleMarkerTableClick}/>
      </div>
    );
  }

}

export default GoogleMaps;
