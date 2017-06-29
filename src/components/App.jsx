import React from 'react';
import CenterPageTitle from './CenterPageTitle.jsx';
import MutableDataTable from './MutableDataTable/MutableDataTable.jsx';
import GoogleMaps from './GoogleMaps/GoogleMaps.jsx';
import UnityWebGL from './UnityWebGL/UnityWebGL.jsx';
import ThreeJS from './ThreeJS/ThreeJS.jsx';

function App(){
  return (
    <div>
      <CenterPageTitle title='React Test App' />
      <MutableDataTable data={ANIMALS} hideField={['id']}/>
      <GoogleMaps markers={MAPS.markers} center={MAPS.center}/>
      <UnityWebGL />
      <ThreeJS />
    </div>
  );
}

export default App;

var ANIMALS = [
    {id: "2104270841", animal: "Cat", age: "3", color: "Brown"},
    {id: "245082176", animal: "Dog", age: "2", color: "Orange"},
    {id: "-1846001306", animal: "Pig", Age: "1", color: "White"}
];

var MAPS = {
  markers:[{ 
    id:1,
    color:"orange_dot",
    lat: 21.299772, 
    lng: -157.815886 
  }],
  center: {
    lat: 21.299772, 
    lng: -157.815886
  }
}
