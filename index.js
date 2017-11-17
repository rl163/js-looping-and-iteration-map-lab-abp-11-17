// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(e){
    return e.toLowerCase()
  })
}

// { first name: 'Bobby',   lastName: 'Smith'  }
function nameToAttributes(names){
  // names = ['Bobby Smith', 'Sammy Watkins']
  names.map(function(name){
    //name 'bobby smith'
    let fName = name.split(" ")[0];
    let lName = name.split(" ")[1];
    return {firstName: fName, lastName: lName}
    // {firstName: 'Bobby', lastName: 'Smith'}
  })
}
