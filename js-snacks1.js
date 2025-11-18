// definisco un array di oggetti "bici" dove ogni oggetto 
// ha come proprietà un name e un weight
const bikes = [

    {name: "Trek Madone", weight: 6.4},
    {name: "Giant TCR", weight: 6.42},
    {name: "Specialized Aethos", weight: 5.98},
    {name: "Pinarello Dogma", weight: 6.8},
    {name: "Canyon Aeroad", weight: 6.6},
    {name: "Colnago V3RS", weight: 7.2},
    {name: "Cannondale SuperSix", weight: 7.5},
    {name: "Bianchi OltreXR4", weight: 6.85},
    {name: "Wilier FilanteSLR", weight: 5.6},
    {name: "Pininfarina DeRosa SK", weight: 6.7},

]

// variabili di appoggio per il weight della bici e il suo name
let lowestWeight = bikes[0].weight;
let lowestWeightBike;
// ad ogni iterazione controlla se il weight della bici 
// è inferiore al weight della bici precedente. Se è inferiore
// aggiorna il weight più basso e salva l'indice
// della bici con il weight minore trovato fino ad ora.
for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].weight < lowestWeight) {
        lowestWeight = bikes[i].weight;
        lowestWeightBike = bikes[i];
    }
}
// stampa a schermo la bici di weight più basso trovata
document.getElementById("lowestWeight").innerHTML = `<div>Bici con weight minore con for loop: <span style="color: green;">${lowestWeightBike.name}</span></div>`;

// con il metodo sort() - o toSorted() in questo caso
// per non modificare l'array originale - possiamo fornire
// una comparatorFn che restituisce 1, -1, 0 in base al valore
// che specifichiamo per return
let sortedBikes = bikes.toSorted(
    // passo alla arrow function i due oggetti dell'array
    // che verranno comparati
    (a, b) => {return a.weight-b.weight;}
);

// a questo punto mi troverò all'indice 0 dell'array di bici
// la bici con il weight minore
document.getElementById("lowestWeight").innerHTML += `<div>Bici con weight minore con sort() method: <span style="color: red;">${sortedBikes[0].name}</span></div>`;

