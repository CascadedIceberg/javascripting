let pets = ['cat', 'dog', 'rat'] 
for (let i = 0; i < pets.length; i++ ) {
  pets[i] = pets[i] + 's'

}
console.log(pets);

let p = [] ;

pets.map(function(j){
  p.push(j + 's');
} );

console.log(p);

