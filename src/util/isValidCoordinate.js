/* validate lat lng coordiates */
function isValidCoordinate(lat, lng){
  const LAT = parseFloat(lat);
  const LNG = parseFloat(lng);

  if(LAT<(-90) || 90<LAT)
    return false;

  if(LNG<(-180) || 180<LNG)
    return false;

  return true;
}

export default isValidCoordinate;
