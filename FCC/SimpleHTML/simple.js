
// simple convertToInteger Function
function convertToInteger(str) {
    return parseInt(str)
  }
  
  //console.log für testt, hier wird eine 7
  console.log(convertToInteger("000007"));
  //Aufruf der Funktion
  convertToInteger("56");

  //Done
  
  // convert number in binary
  //  parseInt(string, radix) wobei radix optional ist und eine nummer von 2-36 hat, bei einem binären eben 2

  function convertToInteger(str) {
    return parseInt(str, 2)
  }
  console.log(convertToInteger("10011"));
  convertToInteger("10011");

  // simpler equal check für eine Condition
  function checkEqual(a, b) {
    return a == b ? true : false;
  }
  console.log(checkEqual(1, 2));
  checkEqual(1, 2);
  
  // mehr als eine condition
  function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0 ) ? "positive" : "negative" ;
    }
    console.log(checkSign(10))
    checkSign(10);
    