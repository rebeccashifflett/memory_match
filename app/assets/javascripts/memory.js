$(document).ready(function() {
  var firstCard, secondCard;

  $('.cards').click(function() {
    var card = $(this).children();

    if(!firstCard) {
      firstCard = card;
      card.show();
    } else {
      secondCard = card;
      card.show();
      matchCards(firstCard, secondCard);
    }
  });

   function matchCards(first, second) {
     if (first.attr('class') === second.attr('class')){
       alert('Match!')
       firstCard = null
       secondCard = null
     } else {
       first.fadeOut()
       second.fadeOut()
       firstCard = null
       secondCard = null
     }
   }


});
