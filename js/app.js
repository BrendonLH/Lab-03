'use strict';

//  get data using Ajax
$(document).ready(function(){
  $.ajax({
    url: '../data/page-01.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      data.forEach(picture => {
        let newPics = new constructor(picture);
        let img = $(`<img src='${newPics.image}'>`).addClass(newPics.keyword);
        let title = $(`<li>${newPics.title}</li>`).addClass(newPics.title);
        $('ul').append(img);
        $('ul').append(title);
        // call functions
        createkeywords();
        createDropDown();
      });
    },
  });
});
// empty arrays for storing info from objects
let keywordArr = [];
let animalArr = [];
// console.log(animalArr);
// console.log('objects:', animalArr);

// create constructor function that takes obj
function constructor(animal){
  this.image = animal.image_url;
  this.title = animal.title;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
  animalArr.push(this);
}

// create keywords function

function createkeywords() {
  animalArr.forEach(animal => {
    // if animal does not include animal keyword then push into keywords so no duplicates are made
    if(!keywordArr.includes(animal.keyword)){
      keywordArr.push(animal.keyword);
    }
  });
}

// dropdown func
function createDropDown() {
  let select = $('#sort');
  select.empty();
  // append the keywords to the dropdown option tag
  keywordArr.forEach(keyword => {
    let sort = $(`<option value=${keyword}>${keyword}</option>`);
    select.append(sort);
  });
}


// handler for dropdown event
$('select').on('change', displayPic);

function displayPic() {
  // hides all the images
  $('img').hide();
  let picked = $(this).val();
  // displays all the picked images
  $(`.${picked}`).show();
  console.log(picked);
}

// console tests
console.log(keywordArr);
console.log(animalArr);
