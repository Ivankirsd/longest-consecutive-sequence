module.exports = function longestConsecutiveLength(array) {
  let maxSequence = 0;

  if (array.length < 2) {
    return array.length;
  }

  array.sort((a,b) => {return a - b}).reduce((accumulator, currentValue, index, array) => {
    if ( index === 0 ) {
      return 1;
    }

    if ( currentValue === array[index - 1] ) {

      return accumulator;
    } else if (currentValue - 1 === array[index - 1]) {
      accumulator++;

      return accumulator;
    } else {
      if (accumulator >= maxSequence) {
        maxSequence = accumulator;
      }

      return 1;
    }
  }, maxSequence);

  return maxSequence;
}
