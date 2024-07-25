
import {person,add} from "./namedExport.js"
console.log(add(10,39));
console.log(person.name,"\n",person.Age)
person.speak();


import myGreet from './defaultExport.js'
myGreet("John")


import * as utils from './utils.js'

utils.add(10,37)
console.log(utils.person)
utils.greet("harry");

import lodash from 'lodash'
console.log(lodash.difference([1, 2, 3, 4, 5], [5, 2, 10]))


import axios from 'axois'
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

