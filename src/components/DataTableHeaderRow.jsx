import React from 'react';

function DataTableHeaderRow (props){
  const headerElements = props.categories.map( 
      (category,index) =>  
      <th key={index}>{category.charAt(0).toUpperCase()+category.slice(1)}</th>
    );

  return (
    <tr>
      {headerElements}
    </tr>
  );
}

export default DataTableHeaderRow;
