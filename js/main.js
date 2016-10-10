var score = 0;
var curQIndex = 0

$(document).ready(function(){
  createQ(0);

  $(document).on('click', '.a', function(){
    if($(this).attr('id') == questions[curQIndex]['correct']){
      updateScore(1);
    }
    next();
  });

})

function createQ(index){
  $('.q-container').empty();

  var q = $('<div class="q"></div>').text(questions[index]['q']);
  $('.q-container').append(q);

  questions[index]['a'].forEach((val, i)=> {
    var a = $('<div class="a"></div>').text(val).attr('id', i);
    $('.q-container').append(a);
  })
}

function createFinish(){
  var ele = "<p class='f'>You have finished the quiz!</p>"

  $('.q-container').empty().append(ele);
}


function updateScore(int) {
  score += int;
  $('span#score').text(score);
}

function next(){
  $('.q-container').fadeOut(500, function(){
    if(curQIndex == questions.length - 1){
      createFinish();
    } else {
      curQIndex++;
      createQ(curQIndex);
    }
    $('.q-container').fadeIn(500);
  })
}
