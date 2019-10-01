// var audio1 = document.getElementById("200");

// function playAudio() {
//     audio1.play();
// }

// function stopAudio(){
//     audio1.pause();
//     audio1.currentTime = 0;
// }


window.addEventListener("load", function() {
    var $audio1 = document.getElementById("a200");
    var $mimicont = document.getElementById("mimicont");

    $mimicont.addEventListener('mouseenter', function playAudio() {
        $audio1.play();
        $audio1.currentTime = 30;
    });
    $mimicont.addEventListener('mouseleave', function stopAudio() {
        $audio1.pause();
        $audio1.currentTime = 30;
    });

    var csschange = document.getElementById('csschange');
    var css01 = document.getElementById('css01');
    var css02 = document.getElementById('css02');

    css01.addEventListener('click', function() {
        csschange = document.getElementById('css').href='./CSS/style.css';
    });

    css02.addEventListener('click', function() {
        csschange = document.getElementById('css').href='./CSS/style2.css';
    });
})