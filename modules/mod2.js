const a = require ("./mod1");


function xyz (){
   console.log("123");
   console.log("345");
  
}

xyz();

console.log("<<<<>>>>");


const result = a(5,2)
console.log("The result is:",result);



var details = {
    name : 'Xelp',
    website: 'Xelpmoc.in'
}

module.exports =  details  , {xyz }