import React from 'react';
import CenterPageTitle from './CenterPageTitle.jsx';
import MutableDataTable from './MutableDataTable.jsx';

function App(){
  return (
    <div>
      <CenterPageTitle title='React Test App' />
      <MutableDataTable data={ANIMALS} hideField={['id']}/>
    </div>
  );
}

export default App;

var ANIMALS = [
    {id: "2104270841", animal: "Cat", age: "3", color: "Brown"},
    {id: "245082176", animal: "Dog", age: "2", color: "Orange"},
    {id: "-1846001306", animal: "Pig", Age: "1", color: "White"}
];
