function setup() {
    createCanvas(400, 400);
    background(51);
    loadJSON('all', gotData);
    console.log("hallo from JS File");
}

// Daten die von der Resource / all kommen
function gotData(data) {
    console.log(data);
    var keys = Object.keys(data);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        console.log("KLassicher FOR Loop : ", i);
        var word = keys[i];
        var score = data[word];
        var x = random(width);
        var y = random(height);
        fill(255);
        text(word, x, y);
    }

}

// mal mit einer FOr Eahch probieren
// keys.forEach(element => {
//     console.log("Hallo", element);
// });