# Aufgabenliste To DO
- Beginnen alles auzuräumen 
- ToDo Liste soll leer starten 
- ToDo hinzufügen mit Entert hinzugefügt werden
- ToDo checken mit checkbox
- ToDo counter soll angezeigt werden werden
- Clear all ready toDos

### Fortschritt
- [x] Feststellen der Klasse, Mouseover gibt Hello World zurück
- [x]Simples Hinzufügen der Elemente
- [ ] Liste clearen
- [ ] Elemente entfernen 
- [ ] HTML vis Js erzeugen 
- [ ] Remove edizieren von TooDOs
- [ ] Alle 3 Buttons unten entfernen werden
- [ ] Neues ToDO mit Enter hinzufügen ( dran denken)
- [ ] Aktuelles anpassen 

``` 
if (event.key === "Enter") {
            alert("Enter wurde gedrückt");
        }
```


### Notes
- Document.querySelector() ==> gibt ``das erste Element`` innerhalb eines Dokuments zurück, welches dem angegebenen Selektor bzw. Selektoren entspricht. 
- Document.querySelectorAll() ==> gibt  ``eine statische (nicht live) NodeList`` zurück, die eine Liste der Elemente des Dokuments darstellt, die mit der angegebenen Selektorgruppe übereinstimmen.

#### APPEND und PREPEND
``var parent = document.createElement("div");
parent.append("Some text");
parent.prepend("Headline: ");`` 

`` console.log(parent.textContent); // "Headline: Some text"
`` 

#### HTML Struktur via JS erzeugen 
- Zuerst Button dann label und input class 
- Dann das in ein DIV verpacken 
- Ale nächstes alles in ein LI verpacken

```
    {
        /* <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Buy a unicorn or 2</label>
                    <button class="destroy"></button>
                </div>
        </li> */
    }
```