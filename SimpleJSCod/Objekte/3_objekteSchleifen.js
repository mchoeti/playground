//"use strict";
/*jshint esversion: 6 */

const student = {
    name: "Max",
    alter: 30,
    kurs: "Deutsch",
    enrolled: false,
    numberOfCourses: 0
};

// erster Durchlauf key wird erstellt und bekomm wert name , im 2. dann den wert alter usw..
for (const key in student) {
    //console.log("key", key);
    // wenn ich den Wert möchte, dann eben values
    const value = student[key];
    console.log(value);
}

// Vorhanden Funktion nutzen
// Object.keys()
console.log("Hier die Keys", Object.keys(student));

// Object.values()
console.log("Hier die Values", Object.values(student));

// Object.entries(): // Besteht aus EIgenschaft und dem Wert
console.log("Hier die Entries", Object.entries(student));
// Beispielsweise bei of Wert für Wert durchgehen-
for (const entry of Object.entries(student)) {
    console.log("Postion", entry);
    // Und hier besorg ich mir die Position 0 und 1 in von jedem Enry. weil mir Entry wird das ja alles ein Array :-)
    console.log(entry[0] + ": " + entry[1]);
}