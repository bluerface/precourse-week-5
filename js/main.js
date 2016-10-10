var score = 0;
var curQIndex = 0;
var clickOK = true;

$(document).ready(function(){
  createQ(0);

  $(document).on('click', '.a', function(){
    if(clickOK){
      clickOK = false;

      if($(this).attr('id') == questions[curQIndex]['correct']){
        updateScore(1);
        fadeCorrect();
      } else {
        fadeFalse();
      }

      // next();
    }
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
  var ele = "<p class='fin'>You have finished the quiz!</p>"

  $('.q-container').empty().append(ele);
}


function updateScore(int) {
  score += int;
  $('span#score').text(score);
}


function fadeCorrect(){
  $('.q-container').fadeOut(500, function(){
    $('.correct').fadeIn(500).delay(400).fadeOut(500, function(){
      next();
    });
  });
}

function fadeFalse(){
  $('.q-container').fadeOut(500, function(){
    $('.false').fadeIn(500).delay(400).fadeOut(500, function(){
      next();
    });
  });
}

function next(){
    if(curQIndex == questions.length - 1){
      createFinish();
    } else {
      curQIndex++;
      createQ(curQIndex);
    }

    $('.q-container').fadeIn(500, function(){
      clickOK = true;
    });
}
