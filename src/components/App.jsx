import React from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import CenterPageTitle from './CenterPageTitle.jsx';
import MutableDataTable from './MutableDataTable/MutableDataTable.jsx';
import GoogleMaps from './GoogleMaps/GoogleMaps.jsx';
import UnityWebGL from './UnityWebGL/UnityWebGL.jsx';
import ThreeJS from './ThreeJS/ThreeJS.jsx';
import D3 from './D3/D3.jsx';

function App(){
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <CenterPageTitle title='React Test App' />
        </Col>
      </Row>
      <Row>
        <Col xs={6} style={{borderRight: "2px solid #ccc"}}>
          <MutableDataTable data={ANIMALS} hideField={['id']}/>
        </Col>
        <Col xs={6}>
          <D3 type="city" data={CITIES} />
        </Col>
      </Row>
      <Row>
        <hr style={{borderTop:"2px solid #ccc"}}/>
        <Col xs={12}>
          <GoogleMaps markers={MAPS.markers} center={MAPS.center}/>
        </Col>
      </Row>
      <Row>
        <hr style={{borderTop:"2px solid #ccc"}}/>
        <Col xs={6}>
          <ThreeJS />
        </Col>
        <Col xs={6} style={{borderLeft: "2px solid #ccc"}}>
          <UnityWebGL />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;

var ANIMALS = [
    {id: "2104270841", animal: "Cat", age: "3", color: "Brown"},
    {id: "245082176", animal: "Dog", age: "2", color: "Orange"},
    {id: "-1846001306", animal: "Pig", age: "1", color: "White"}
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

var CITIES = [
  { "population": 4.4, "city": "Seattle" }, 
  { "population": 2.1, "city": "Dallas" }, 
  { "population": 17.2, "city": "New York" }, 
  { "population": 3.8, "city": "Boston" }, 
  { "population": 10.5, "city": "Los Angeles" }
]
