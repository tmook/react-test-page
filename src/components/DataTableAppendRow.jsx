import React from 'react';

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
    rowObj['id'] = this.hashCode(hashString);

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

  capitalize(word) {
    return word.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  render(){
    const inputFields = this.props.categories.map( (category,index) => (
        <td key={index}>
          <input 
            type="text" 
            ref={input => this.refList[category]=input}
            name={category}
            placeholder={this.capitalize(category)}
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
