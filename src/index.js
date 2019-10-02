module.exports = function check(str, bC) {
   let strArr = str.split('').sort();
   let braArr = bracketsConfig.filter( el => (el!='[')&&(el!=']')).sort();
   return strArr === braArr;
}