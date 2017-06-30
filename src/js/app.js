require('../css/styles.css')
const people = require('./people.js');
let $ = require('jquery');



$.each(people, function(key, value){
  $('body').append('<h1>'+people[key].name+'<h1>');
})

console.log(people)
