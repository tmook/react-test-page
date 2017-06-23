import React from 'react';
import AnimalTable from './AnimalTable.jsx';

function App(){
  return (
    <AnimalTable animals={ANIMALS}/>
  );
}

export default App;

var ANIMALS = [
    {id: "2104270841", animal: "Cat", age: "3", color: "Brown"},
    {id: "245082176", animal: "Dog", age: "2", color: "Orange"},
    {id: "-1846001306", animal: "Pig", Age: "1", color: "White"}
];
