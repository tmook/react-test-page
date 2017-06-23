import React from 'react';

class DataRow extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    //call remove function passed from props with data-id
    this.props.handleRowRemove(this.rowId);
  }

  render() {
    let values = this.props.values;

    const rowElements = Object.keys(values).map( 
        (key,index) => (key != 'id' && <td key={index}>{values[key]}</td>) 
      );

    return (
      <tr>
        {rowElements}
        <td ref={() => this.rowId = this.props.values.id}>
          <button onClick={this.handleClick}>
            &#10006;
          </button>
        </td>
      </tr>
    );
  }
}

export default DataRow;
