Emmet Kommandos und deren Output in VS Studio Code
====================================================

Erstellung Simpler HTML5 templates
------------

    html:5

ergibt, meistens via Tabulator Taste, :

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
        <body>
    
        </body>
    </html>

Weitere Elemente können angehängt werden, beispielsweise wird hier eine html 5 Basisstruktur erzeugt, danach ein element, hier ist es Title, mit dem Wert My Title erzeugt:  

    html:5>title{My Title}

Das Resultat sieht dann wie folgt aus:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <title>My Title</title>
    </body>
    </html>  

Eigentlich recht fein. Natürlich kann man Emmet unglaublich erweitern und mit einer Zeile damit sich sehr viel erleichtern. Nachzulesen gibt es das unter anderem auf einem sogenannten [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/).

