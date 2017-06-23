import React from 'react';

const initialState = {
  animal: "",
  age: "",
  color: ""
}

class DataTableAddRow extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    //update state with new value and id
    this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault();

    //recompute hash for id
    let hashString = "";
    //Concat state items
    Object.keys(this.state).map( key => hashString+=this.state[key] );

    //build row object
    const rowObj = {
      id: this.hashCode(hashString),
      ...this.state
    };

    //lift state up to parent
    this.props.handleRowAdd(rowObj);

    //reset state
    this.reset();
  }

  reset(){
    this.state = initialState;
    this.setState(initialState);
  }

  hashCode(word){
    var hash = 0, i, chr;
    if (word.length === 0) return hash;
    for (i = 0; i < word.length; i++) {
      chr = word.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  render(){
    return (
      <tr>
        <td>
          <input 
            type="text" 
            name="animal" 
            placeholder="Animal" 
            value={this.state.animal} 
            onChange={this.handleChange} />
        </td>
        <td>
          <input 
            type="text" 
            name="age" 
            placeholder="Age" 
            value={this.state.age} 
            onChange={this.handleChange} />
        </td>
        <td>
          <input 
            type="text" 
            name="color" 
            placeholder="Color" 
            value={this.state.color} 
            onChange={this.handleChange} />
        </td>
        <td>
          <button onClick={this.handleSubmit}>
            add
          </button>
        </td>
      </tr>
    );
  }
}

export default DataTableAddRow;
