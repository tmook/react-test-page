import React from 'react';
import hashCode from '../util/hashCode.js';
import capitalize from '../util/capitalize.js';


class DataTableAppendRow extends React.Component {
  constructor(props){
    super(props);

    this.refList = {};
    this.props.categories.forEach( category => (
      this.refList[category]=""
    ));

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    //get string of object to computer hash for id
    let hashString = '';
    for(let ref in this.refList){
      if(this.refList.hasOwnProperty(ref)){
        hashString+=this.refList[ref].value;
      }
    }

    //build row object
    let rowObj = {};
    for(let ref in this.refList){
      if(this.refList.hasOwnProperty(ref)){
        rowObj[ref] = this.refList[ref].value;
      }
    }
    //get hashcode and set to id field
    rowObj['id'] = hashCode(hashString);

    //lift change up to parent
    this.props.handleRowAdd(rowObj);

    //reset input fields
    this.reset();

  }

  reset(){
    for(let ref in this.refList){
      if(this.refList.hasOwnProperty(ref)){
        this.refList[ref].value = '';
      }
    }
  }

  render(){
    const inputFields = this.props.categories.map( (category,index) => (
        <td key={index}>
          <input 
            type="text" 
            ref={input => this.refList[category]=input}
            name={category}
            placeholder={capitalize(category)}
            onChange={this.handleChange} />
        </td>
      )
    );

    return (
      <tr>
        {inputFields}
        <td>
          <button onClick={this.handleSubmit}>
            add
          </button>
        </td>
      </tr>
    );
  }
}

export default DataTableAppendRow;
