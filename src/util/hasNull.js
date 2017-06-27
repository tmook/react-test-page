/* check if a javascript obj contains a null value for a property */
function hasNull(Obj){
  for (let key in Obj) {
    if ( typeof(Obj[key])=='undefined' ){
      return true;
    }else if ( typeof(Obj[key])=='string' && (Obj[key]==null) ) {
      return true;
    }else if ( typeof(Obj[key])=='number' && isNaN(Obj[key]) ) {
      return true;
    }
  }
  return false;
}

export default hasNull;
