function setup() {
    createCanvas(400, 400);
    //    background(51);
    drawData();
    console.log("hallo from JS File");

    // in P5 mit einer Select funktion
    var button = select('#submitt');
    button.mousePressed(submitWord);

    function drawData() {
        loadJSON('all', gotData);

    }

    function submitWord() {
        console.log("Jetzt aber mit P5 Funktionen");
        var word = select('#word').value();
        var score = select('#score').value();
        // mal schauen ob wir uns die Dazrn von den HTML Elementen mit den ID`s abholen können
        console.log(word, score);
        // no we only have add those elements with using OUR API
        loadJSON("add/" + word + "/" + score, finished);

        function finished(data) {
            console.log(data);
            // Wenn ein WOrt übermittelt wird dann kommt natülich nohmals die Funktion hinzu
            drawData();
        }
    }
}

// Daten die von der Resource / all kommen
function gotData(data) {
    // Nochmals den Background neu zeichnen
    background(51);
    console.log(data);
    var keys = Object.keys(data);
    console.log(keys);
    // for (var i = 0; i < keys.length; i++) {
    //     console.log("KLassicher FOR Loop : ", i);
    //     var word = keys[i];
    //     var score = data[word];
    //     var x = random(width);
    //     var y = random(height);
    //     fill(255);
    //     textSize(22);
    //     text(word, x, y);
    // }

    // Alternative mit einem For Each Loop
    keys.forEach(element => {
        console.log("Aber sowas von FOR EACH", element);
        var word = element;
        var score = data[word];
        var x = random(width);
        var y = random(height);
        fill(0, 200, 153);
        textSize(22);
        text(word, x, y);
    });

}

// JEDER JQUERY Code muss hier rein. Sonst klappt das nicht
$(document).ready(function() {
    // all custom jQuery will go here
    $("h1").hide();
    $("#submitt").mouseover(function() {
        console.log("Über den Button gefahren");
        $("p").append("I love JQuery");
        $("p").append("I love JQuery x 2");
        $("p").append("I love JQuery oder so ");
        $("p").append("I love JQuery noch immer hey");
    });
    $("#submitt").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
        $("#div4").fadeIn(5000);
    });
});

// mal mit einer FOr Eahch probieren
// keys.forEach(element => {
//     console.log("Hallo", element);
// });