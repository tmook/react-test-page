import React from 'react';
import D3AnimalBarChart from './D3AnimalBarChart.jsx';
import D3CityBarChart from './D3CityBarChart.jsx';


class D3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data ? this.props.data : [],
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(){
    // handle update to data here
  }

  render() {
   let barchart = <D3AnimalBarChart data={this.props.data}/>;
    if(this.props.type === "city")
      barchart = <D3CityBarChart data={this.props.data}/>;

    return ( 
      <div>
        <span>{this.props.title != null ? this.props.title : "d3.js"}</span>
        {barchart}
      </div>
    );
  }

}

export default D3;
