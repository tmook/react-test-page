import React from 'react';
import {Table} from 'react-bootstrap';
import DataTableRow from './DataTableRow.jsx';
import DataTableHeaderRow from './DataTableHeaderRow.jsx';
import DataTableAppendRow from './DataTableAppendRow.jsx';

class MutableDataTable extends React.Component{
  constructor(props){
    super(props);
    
    //extract categories from data
    const tableCategories = (this.props.data).length > 0 ? 
        Object.keys(this.props.data[0]) : {};

    //set state object
    this.state = {
      categories: tableCategories,
      data: this.props.data
    };

    //bind 'this' to handler functions
    this.handleRowAdd = this.handleRowAdd.bind(this);
    this.handleRowRemove = this.handleRowRemove.bind(this);
  }

  handleRowAdd(newRow){
    //add newRow to state
    this.setState(prevState => ( {data: prevState.data.concat([newRow])} ) );
  }

  handleRowRemove(data_id){
    //create set of items to delete
    const toDelete = new Set([data_id]);

    //use this very convinent filter method to remove rows from data
    this.setState(
      prevState => ({data: prevState.data.filter(
        row => !toDelete.has(row.id) )
      }) 
    );
  }

  render() {
    //check if hideField prop exists
    const hideField = this.props.hideField != null ?  this.props.hideField : [];

    //build data rows
    let dataRows = null;
    if((this.state.data).length > 0){
      dataRows = this.state.data.map( (row, index) => (
          <DataTableRow 
          key={index} 
          rowData={row} 
          hideField={hideField}
          handleRowRemove={this.handleRowRemove} />
        )
      );
    }

    //remove hide fields from categories
    let cleanCategories = [];
    this.state.categories.forEach( category =>
      !hideField.includes(category) &&
        cleanCategories.push(category)
      )

    return (
      <div>
        <span>
          {this.props.title != null ? this.props.title : "Mutable Data Table"}
        </span>
        <Table bordered condensed hover striped>
          <thead>
            <DataTableHeaderRow 
              categories={cleanCategories} />
          </thead>
          <tbody>
            {dataRows}
            <DataTableAppendRow 
              categories={cleanCategories}
              handleRowAdd={this.handleRowAdd} />
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MutableDataTable;

