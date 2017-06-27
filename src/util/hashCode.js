/* generates a hashcode for a string */
export default function hashCode(word){
  var hash = 0, i, chr;
  if (word.length === 0) return hash;
  for (i = 0; i < word.length; i++) {
    chr = word.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

