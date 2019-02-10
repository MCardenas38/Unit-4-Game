var wins= 0;
var losses= 0;
var targetscore= 0;
var userscore= 0;

function reset(){
    targetscore= Math.floor(Math.random() * 100) +19;
    userscore= 0;
    $(".gem1").attr('data-number', Math.floor(Math.random() * 12) +1);
    console.log('here', targetscore);
    $(".gem2").attr('data-number', Math.floor(Math.random() * 12) +1);
    $(".gem3").attr('data-number', Math.floor(Math.random() * 12) +1);
    $(".gem4").attr('data-number', Math.floor(Math.random() * 12) +1);
    $("#target").text(targetscore);
    $("#score").text(userscore);
    $("#winnum").text(wins);
    $("#losenum").text(losses);
}

reset();

$(".gems").on("click",function(){
    var crystalValue = $(this).data("number");
    console.log(crystalValue);
    userscore += crystalValue;
    $("#target").text(targetscore);
    $("#score").text(userscore);
    $("#winnum").text(wins);
    $("#losenum").text(losses);
    if(userscore===targetscore){
        ++wins;
        reset();
        alert("You Won!");
    }
    else if(userscore>targetscore){
        ++losses;
        reset();
        alert("You Lost!");
    }
})

