import React from 'react';
import {Button} from 'react-bootstrap';

function DataTableRow (props){
  function handleClick(e){
    e.preventDefault();
    props.handleRowRemove(props.rowData['id']);
  }

  const rowElements = Object.keys(props.rowData).map( 
      (key,index) => !props.hideField.includes(key) &&
                      <td key={index}>{props.rowData[key]}</td>
    );
    
  return (
    <tr>
      {rowElements}
      <td>
        <Button bsStyle='danger' onClick={handleClick}>
          &#10006;
        </Button>
      </td>
    </tr>
  );
}

export default DataTableRow;
