import React from 'react';
import DataCategoryRow from './DataCategoryRow.jsx';
import DataRow from './DataRow.jsx';
import DataTableAddRow from './DataTableAddRow.jsx';

class DataTable extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    let dataRows = null;
    if((this.props.data).length > 0){
      dataRows = this.props.data.map( (row, index) => 
        (<DataRow 
          key={index} 
          values={row} 
          handleRowRemove={this.props.handleRowRemove} 
        />)
      );
    }

    return (
      <table>
        <thead>
          <DataCategoryRow categories={this.props.categories} />
        </thead>
        <tbody>
          {dataRows}
          <DataTableAddRow handleRowAdd={this.props.handleRowAdd} />
        </tbody>
      </table>
    );
  }

}

export default DataTable;

