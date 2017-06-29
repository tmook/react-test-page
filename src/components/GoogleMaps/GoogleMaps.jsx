import React from 'react';
import GoogleMapsMap from './GoogleMapsMap.jsx';
import GoogleMapsMarkerTable from './GoogleMapsMarkerTable.jsx';


class GoogleMaps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markers: this.props.markers ? this.props.markers : [],
      center: this.props.center
    };

    this.handleAddMarker = this.handleAddMarker.bind(this);
    this.handleRemoveMarker = this.handleRemoveMarker.bind(this);
    this.handleMarkerTableClick = this.handleMarkerTableClick .bind(this);
  }

  handleAddMarker(new_marker){
    //append marker_object to markers
    this.setState(prevState => 
      ( {markers: [new_marker].concat(prevState.markers),
        center: {lat:new_marker.lat, lng:new_marker.lng} }
      ));
  }

  handleRemoveMarker(marker_id){
    //create set of items to delete
    const toDelete = new Set([marker_id]);

    //remove marker with marker id
    this.setState(
      prevState => ({markers: prevState.markers.filter(
        marker => !toDelete.has(marker.id) )
      }) 
    );
  }

  handleMarkerTableClick(newCenter){
    //life cycle on update? in mapsMap.. update center here
    this.setState( {center: newCenter});
  }

  render() {
    return ( 
      <div>
        <span>{this.props.title != null ? this.props.title : "Google Maps"}</span>
        <GoogleMapsMap 
          mapSize={this.props.mapSize} 
          center={this.state.center}
          markers={this.state.markers}/>
        <GoogleMapsMarkerTable 
          markers={this.state.markers} 
          handleAddMarker={this.handleAddMarker}
          handleRemoveMarker={this.handleRemoveMarker} 
          handleMarkerTableClick={this.handleMarkerTableClick}/>
      </div>
    );
  }

}

export default GoogleMaps;
