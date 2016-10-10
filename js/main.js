var score = 0;

$(document).ready(function(){
  createQ(0);
})

function createQ(index){
  var q = $('<div class="q"></div>').text(questions[index]['q']);
  $('.q-container').append(q);

  questions[index]['a'].forEach((val, i)=> {
    var a = $('<div class="a"></div>').text(val).attr('id', i);
    $('.q-container').append(a);
  })
}
