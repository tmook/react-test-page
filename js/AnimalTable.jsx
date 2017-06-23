import React from 'react';
import DataTable from './DataTable.jsx';
import DataTableAddRow from './DataTableAddRow.jsx';

class AnimalTable extends React.Component{
  constructor(props){
    super(props);
    
    //extract categories
    const tableCategories = (this.props.animals).length > 0 ? 
        Object.keys(this.props.animals[0]).splice(1) : {};

    this.state = {
      categories: tableCategories,
      data: this.props.animals
    };

    this.handleRowAdd = this.handleRowAdd.bind(this);
    this.handleRowRemove = this.handleRowRemove.bind(this);
  }

  handleRowAdd(newRow){
    //add newRow to state
    this.setState(prevState => ( {data: prevState.data.concat([newRow])} ) );
  }

  handleRowRemove(data_id){
    const toDelete = new Set([data_id]);
    //remove state element with id field
    this.setState(
      prevState => ({data: prevState.data.filter(
        row => !toDelete.has(row.id) )
      }) 
    );
  }

  render() {
    return (
      <div>
        <strong>Animal Data Table</strong>
        <DataTable 
          handleRowAdd={this.handleRowAdd} 
          handleRowRemove={this.handleRowRemove} 
          categories={this.state.categories}
          data={this.state.data} />
      </div>
    );
  }
}

export default AnimalTable;


