require('../css/styles.css')
const employees = require('./employee.js');
let $ = require('jquery');



$.each(employees, function(key, value){
  $('body').append('<h1>'+employees[key].name+'<h1>');
})

console.log(employees)
