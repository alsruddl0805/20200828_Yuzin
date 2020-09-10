// nav 구현

$("ul#mainMenu>li").mouseover(function(){
    $("#extraSubMenu").stop().fadeIn();
    $("#extraSubMenu").mouseover(function(){
        $("#extraSubMenu").stop().fadeIn();
    });
});

$("ul#mainMenu>li").mouseout(function(){
    $("#extraSubMenu").stop().fadeOut();
    $("#extraSubMenu").mouseout(function(){
        $("#extraSubMenu").stop().fadeOut();
    });
});

// 레이어팝업 구현

$("div#bbs table tr:first-child").click(function(){
    $("div#modal").css({"display":"block"});
});

$("div#modalLayer button").click(function(){
    $("div#modal").css({"display":"none"});
});

// 슬라이드페이드 구현

function fnSlide() {
    $("#fadeFrame>a:first").fadeOut(2000,function(){
        $(this).insertAfter("#fadeFrame>a:last");
    });

    $("#fadeFrame>a:nth-child(2)").fadeIn(2000);
}

setInterval(fnSlide,1000);
