var score = 0;
var curQIndex = 0

$(document).ready(function(){
  createQ(0);

  $('.a').click(function(){
    console.log($(this).text());
    if($(this).attr('id') == questions[curQIndex]['correct']){
      updateScore(1);
    }
  });

})

function createQ(index){
  var q = $('<div class="q"></div>').text(questions[index]['q']);
  $('.q-container').append(q);

  questions[index]['a'].forEach((val, i)=> {
    var a = $('<div class="a"></div>').text(val).attr('id', i);
    $('.q-container').append(a);
  })
}

function updateScore(int) {
  score += int;
  $('span#score').text(score);
}
