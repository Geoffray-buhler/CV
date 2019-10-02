// var audio1 = document.getElementById("200");

// function playAudio() {
//     audio1.play();
// }

// function stopAudio(){
//     audio1.pause();
//     audio1.currentTime = 0;
// }




window.addEventListener("load", function() {
    var activeCSS = 'style2';

    var $css01 = document.getElementById('css01');
    var $css02 = document.getElementById('css02');
    var $cssLink = document.getElementById('css');

    var $audio1 = document.getElementById("audiolisten");
    var $mimicont = document.getElementById("mimicont");

    document.addEventListener('keydown', function playAudio(event) {
        if (event.key == 'p') { 
            if (activeCSS != 'style') {
                $audio1.pause();
                $audio1.currentTime = 50;
            } else {
                $audio1.play();
                $audio1.currentTime = 50;
            }
        }
    });
    document.addEventListener('keydown', function stopAudio(event) {
        if (event.key == 'o') {
            $audio1.pause();
            $audio1.currentTime = 50;
        }
    });

    $css01.addEventListener('click', function() {
        changeCSS('style');
    });

    $css02.addEventListener('click', function() {
        changeCSS('style2');
    });

    function changeCSS(newCSSFileName){
        activeCSS = newCSSFileName;
        updateCSS();
    }

    function updateCSS(){
        $cssLink.href = `./CSS/${activeCSS}.css`;
    }

    printd.addEventListener('click', function() {
        window.print();
    })
})