"use strict"

const getStudentName = function() {
    return this.lastname + ", " + this.firstname
}

const studentModule = {
    students: [
        { firstname: "Max", lastname: "Mustermann", getName: getStudentName }
    ],
    addStudent(firstname, lastname) {
        this.students.push({
            firstname: firstname,
            lastname: lastname,
            getName: getStudentName
        })
    },
    printStudents() {
        console.log("Teilnehmerliste:")
        for (const student of this.students) {
            console.log(" - " + student.getName())
        }
    },
}

studentModule.addStudent("Erika", "Mustermann")
studentModule.printStudents()

// Und hier mal ein paar SPaceX Starts

const fs = require("fs")

const rocketModule = {
    launches: [],
    loadLaunches: function() {
        if (this.launches.length === 0) {
            console.log("Lese Raketenstarts ein...")

            const _this = this
            fs.readFile(
                __dirname + "/spacex/launches.json", { encoding: "utf-8" },
                (err, data) => {
                    _this.launches = JSON.parse(data)
                })
        }
    }
}


rocketModule.loadLaunches()

// Gebe alle Startvorgänge aus... 
setTimeout(() => {
    console.log(rocketModule.launches)
}, 1000)