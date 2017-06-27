import React from 'react';
import GoogleMapsAddMakerRow from './GoogleMapsAddMakerRow.jsx';
import GoogleMapsMarkerRow from './GoogleMapsMarkerRow.jsx';


class GoogleMapsMarkerTable extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    //build data rows
    let dataRows = null;
    if( (this.props.markers).length > 0)
      dataRows = this.props.markers.map( (row, index) => (
            <GoogleMapsMarkerRow
            key={index}
            rowData={row}
            hideField={['id']}
            handleRowRemove={this.props.handleRemoveMarker}
            handleMarkerTableClick={this.props.handleMarkerTableClick}/>
        )
      );

    return (
      <table>
        <tbody>
          <GoogleMapsAddMakerRow handleAddMarker={this.props.handleAddMarker} />
          {dataRows}
        </tbody>
      </table>
    )
  }

}

export default GoogleMapsMarkerTable;
