import React from 'react';
import * as CONST from '../../util/Constants.js';

function GoogleMapsMarkerRow (props){
  function handleClick(e){
    e.preventDefault();
    props.handleRowRemove(props.rowData['id']);
  }

  function handleMarkerClick(e){
    e.preventDefault();
    props.handleMarkerTableClick(
      { lat: props.rowData['lat'],
        lng: props.rowData['lng'] });
  }

  const rowElements = Object.keys(props.rowData).map( 
    (key,index) => {
      let returnCell = !props.hideField.includes(key) &&
        <td key={index}>{props.rowData[key]}</td>;
      if(key=='color'){
        let imgSrc = CONST.MARKERS[props.rowData[key]];
        let imgStyle = {height:"1em", width:"1em"}
        returnCell = (<td key={index} >
          <img src={imgSrc} style={imgStyle} />
        </td>);
      }
      return returnCell;
    });
    
  return (
    <tr onClick={handleMarkerClick}>
      {rowElements}
      <td>
        <button onClick={handleClick}>&#10006;</button>
      </td>
    </tr>
  );
}

export default GoogleMapsMarkerRow;
