Infos zu Schleifen
====================================================

For ... of Schleife
------------
Mit dem for...of statement können sogenannte iterable objects durchlaufen werden 
(Array, Map, Set, das arguments Objekt und weitere eingeschlossen), 
wobei auf jeden gefundenen Wert eigene Statements ausgeführt werden können.

```
for (variable of iterable) {
  statement
}
```
- Variable: Bei jedem Durchlauf wird variable der jeweils gefundene Wert zugewiesen.
- Iterable: Objekt, dessen aufzählbare Eigenschaften durchlaufen werden.

Unterschied zwischen for...of und for...in
------------
Das folgende Beispiel zeigt den Unterschied zwischen einer for...of und einer for...in Schleife. 
Basis, bzw. Ausgangssituation
```
let arr = [3, 5, 7];
arr.foo = "hallo";
```
- for...in läuft über die Namen der Eigenschaften
```
for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}
```
- for...of geht über deren Werte:
```
for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
``` 
