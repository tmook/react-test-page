import React from 'react';

import hashCode from '../util/hashCode.js';
import hasNull from '../util/hasNull.js';
import isValidCoordinate from '../util/isValidCoordinate.js';
import * as CONST from '../util/Constants.js';


class GoogleMapsAddMakerRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: this.getRandomMarker(),
      lat: "",
      lng: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const name = target.name;
    const value = target.value;
  
    this.setState( {[name]:value} );
  }

  handleKeyPress(e){
    if (e.key == 'Enter') {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const hashString = this.state.color + this.state.lat + this.state.lng;
    
    const newMarker = {
      id: hashCode(hashString),
      color: this.state.color,
      lat: parseFloat(this.state.lat),
      lng: parseFloat(this.state.lng)
    };

    if(hasNull(newMarker) || !isValidCoordinate(this.state.lat, this.state.lng)) {
      console.log("invalid input");
    }else{
      this.props.handleAddMarker(newMarker);
      this.reset();
    }

  }

  reset(){
    this.setState( {color:this.getRandomMarker(), lat:"", lng:""} );
  }

  getRandomMarker(){
    const rand = Math.floor(Math.random()*23);
    return Object.keys(CONST.MARKERS)[rand];
  }

  render() {
    return (
      <tr>
        <td>
          <input
            disabled={true}
            type="text"
            name="color"
            placeholder="Marker (randomized)"
            value={this.state.color ? "" : ""}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange} />
        </td>
        <td>
          <input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={this.state.lat}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange} />
        </td>
        <td>
          <input
            type="text"
            name="lng"
            placeholder="Longitude"
            value={this.state.lng}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange} />
        </td>
        <td>
          <button onClick={this.handleSubmit}>
            Mark it!
          </button>
        </td>
      </tr>
    );
  }

}

export default GoogleMapsAddMakerRow;
