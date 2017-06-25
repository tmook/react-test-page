import React from 'react';

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
        <button onClick={handleClick}>
          &#10006;
        </button>
      </td>
    </tr>
  );
}

export default DataTableRow;
