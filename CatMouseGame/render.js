
  $("#mouse").click(function addScore() { //when mouse clicked value incraments
    $("#mouse").css("display", "none"),
        $("#score").html(function() { //mouse disappears on click
            return score + 1;
        });
});
