// Simples Tutorial wie man die ObjektOrientierten Challanges auf FCC meisterst

// 1. Definition eines simplen Java Script Objekt

let Hund = {
    name: "Rex",
    numLegs: 4
  };

// Ausgabe der Ente mit allen Eigenschaften
console.log(Hund);
// Ausgabe des Namens 
console.log(Hund.name);

//#######################################//


// Definieren einer "Hunde Funktion"
function Dog() {
    this.name = "Rex";
    this.color = "black";
    this.numLegs = 4;
  }


  //  ########################################
// Mal ein neues Haus mit InstanceOf
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Add your code below this line
let myHouse = new House(4)
myHouse instanceof House;
console.log(myHouse.numBedrooms);
