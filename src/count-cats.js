const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function(cats){
  	for(let i = 0; i < cats.length; i++) {
    	cats[i] === "^^" && count ++;
    }
	})  
  return count;
};