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
})