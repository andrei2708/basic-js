const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let teamArr = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] === 'string') {
       teamArr.push(members[i].trim().charAt(0));
       const teamArrUp = teamArr.map(teamArr => teamArr.toUpperCase());  
       nameTeam = teamArrUp.sort().join('');  
     }  
   }
   return nameTeam;
}