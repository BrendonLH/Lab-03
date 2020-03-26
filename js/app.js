'use strict';
$(document).ready(function(){
  $.ajax({
    url: '/data/page-01.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      data.forEach(picture => {
        let newPics = new constructor(picture);

        $('p#picList').append(`<img src='${newPics.image}'>`);
        $('p#picList').append(`<li>${newPics.title}</li>`);
        // <li>${newPics.title}</li>
      });
    },
  });
});
let animalArr = [];
// console.log(animalArr);
// console.log('objects:', animalArr);
function constructor(animal){
  this.image = animal.image_url;
  this.title = animal.title;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
  animalArr.push(this);
}


// $.getJSON('/data/page-01.json', function(data){
//   console.log(data);
// });

// ajax method