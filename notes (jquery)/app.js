var modalopen = document.querySelector(".open");
var modalclose = document.querySelector(".x");
var addnote = document.querySelector(".btn");
var notetext = document.querySelector(".note-text");


modalopen.addEventListener('click',openmodal);
modalclose.addEventListener('click',closemodal);
addnote.addEventListener('click',addnote);


function openmodal(){
    document.querySelector(".new").style.display="block";;
}

function closemodal(){
    document.querySelector(".new").style.display="none";
}

$(function(){
    $(".btn").click(function(){
        var t = $(".note").val();

        console.log(t);
        // Append is not working
        $(".display").append(t);
        closemodal();
    });   

    $(".no").click(function(){
        $(this).remove();
    });
});

