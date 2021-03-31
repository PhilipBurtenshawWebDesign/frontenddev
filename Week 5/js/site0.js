$(function()
{

    console.log('Jquery goodness is loaded');

    applyStriped();

})


function toggleStriped() {

    $('body div p').toggleClass("striped");
 }
 
 function addElement() {

$("<p>And here is additoinal text 1</p>").insertAfter('#lastPara');
$("<p>And here is additoinal text 2</p>").insertAfter('#lastPara');
$("<p>And here is additoinal text 3</p>").insertAfter('#lastPara');

 }


function selectElement() {

   $('p')[0].innerHTML = "<em>Hello There!</em>";
}

function hide() {

    $('p:first').hide();
}

function show() {

    $('p:first').show();
}

function toggle() {

    $('p:first').toggle();
}

function applyStriped() {

    $('p.second').addClass("striped");

}


function setStyle() {

    console.log(`set style is called`)


    $('p:first').css("font-style","italic");

}