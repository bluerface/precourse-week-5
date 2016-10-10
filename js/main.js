var score = 0;
var curQIndex = 0;
var clickOK = true;
var fspeed = 250;

$(document).ready(function(){
  createQ(curQIndex);

  $(document).on('click', '.a', function(){
    if(clickOK){
      clickOK = false;

      if($(this).attr('id') == questions[curQIndex]['correct']){
        updateScore(1);
        fadeCorrect();
      } else {
        fadeFalse();
      }
    }
  });

  $(document).on('click', '.restart', function(){
    updateScore(-1);
    curQIndex = 0;
    console.log(curQIndex);
    $('.q-container').fadeOut(fspeed, function(){
      createQ(curQIndex);
      $('.q-container').fadeIn(fspeed);
    })
  })

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
  var ele = "<p class='fin'>You have finished the quiz!</p>";
  var ele2 = "<p class='fin'> Score:" + score + "/" + questions.length + '</p>';
  var ele3 = "<p class='fin restart'> Restart </p>";

  $('.q-container').empty().append(ele, ele2, ele3);
}


function updateScore(int) {
  if(int == -1) {
    score = 0
  } else {
    score += int;
  }
  $('span#score').text(score);
}


function fadeCorrect(){
  $('.q-container').fadeOut(fspeed, function(){
    $('.correct').fadeIn(fspeed).delay(fspeed).fadeOut(fspeed, function(){
      next();
    });
  });
}


function fadeFalse(){
  $('.q-container').fadeOut(fspeed, function(){
    $('.false').fadeIn(fspeed).delay(fspeed).fadeOut(fspeed, function(){
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

    $('.q-container').fadeIn(fspeed, function(){
      clickOK = true;
    });
}
