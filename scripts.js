function loadDoc(filename) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("the-content").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}

function changeBackground() {
    var boxes = document.querySelectorAll(".randomcolor");

    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    var BtoF = 'BCDEF'.split('');
    var BtoD = 'BCD'.split('');
    var color = '#';

    for (var i = 0; i < 3; i++ ) {
        var rchar = Math.floor(Math.random() * BtoF.length);
        
        color += BtoF[rchar];

        if(rchar == 'F') {
            color += BtoD[Math.floor(Math.random() * BtoF.length)];
        } else {
            color += BtoF[Math.floor(Math.random() * BtoF.length)];
        }
    }
    return color;
}