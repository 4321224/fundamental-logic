/* 
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be true;

For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be false.
*/

function pairOfShoes(shoes) {
    for(var i = 0; i < shoes.length; i++){
      if(shoes[i][0] == 0){
        shoes[i][0] = -1
      }
    } 
    const objectify = (array) => {
      return array.reduce(function(p,c){
        p[c[1]] = (p[c[1]] != undefined ? p[c[1]] : 0) + c[0]
        return p
      }, {})
    }
    var p = objectify(shoes)
    for(var x in p) {
      if(p[x] != 0){
        return false
      }
    }
    return true
  }

  shoes = [[0, 21], 
           [1, 23], 
           [1, 21], 
           [0, 23]];
console.log(pairOfShoes(shoes));  