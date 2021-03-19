// Heute mit JQery mal ein paar Dinge ändern
// Immer alles mit Document.ready ausführen - kommt aber von JQERY
$(document).ready(function() {
    $("#myTitle").html("Neuer Titel oida !!!");

    // und jetzt einfach den HTML Code von vorher reinpacken
    var fruits = [{
        name: "Apple ",
        color: "green ",
        weight: 10
    }, {
        name: "Orange ",
        color: "orange ",
        weight: 15
    }, {
        name: "Banana ",
        color: "yellow ",
        weight: 20
    }];

    function redrawList() {
        var list = $("#fruitlist ");
        list.html("");

        $.each(fruits, function(index, value) {
            console.log(value);
            $("<li/>").text(value.name + "," + value.color + ", " + value.weight).appendTo(list);

        });
    }

    redrawList();

    $("#addFruitButton").click(function() {
        var fruitName = $("#fruitNameInput").val();
        var fruitWeight = $("#fruitWeightInput").val();
        var fruitColor = $("#fruitColorInput").val();

        var fruitsObject = {
            name: fruitName,
            color: fruitColor,
            weight: parseInt(fruitWeight)
        };

        // Hinzufügen mit Push 
        fruits.push(fruitsObject);
        console.log(fruits);
        console.log("Hier sollte dein Input stehen: " + fruitsObject);
        // Wenn also eine Eingabe kommt, nochmals ausführen 
        redrawList();
    });
});

// Das geht beispielweise nicht - weil wir eben nicht fertig sind
$("#myTitle").html("Ze Fix, da geht nix!");