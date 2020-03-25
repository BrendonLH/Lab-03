'use strict';

// $.getJSON('/data/page-01.json', function(data){
//   console.log(data);
// });

// ajax method
$.ajax({
  url: '/data/page-01.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function(data) {
    $(data).each(function(index, value){
      console.log(value.keyword);
    });
    console.log(data);
  },
});
