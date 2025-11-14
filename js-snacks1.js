// definisco un array di oggetti "bici" dove ogni oggetto 
// ha come proprietà un nome e un peso
const bikes = [

    {nome: "Trek Madone", peso: 6.4},
    {nome: "Giant TCR", peso: 6.42},
    {nome: "Specialized Aethos", peso: 5.98},
    {nome: "Pinarello Dogma", peso: 6.8},
    {nome: "Canyon Aeroad", peso: 6.6},
    {nome: "Colnago V3RS", peso: 7.2},
    {nome: "Cannondale SuperSix", peso: 7.5},
    {nome: "Bianchi OltreXR4", peso: 6.85},
    {nome: "Wilier FilanteSLR", peso: 5.6},
    {nome: "Pininfarina DeRosa SK", peso: 6.7},

]

// variabili di appoggio per il peso della bici e il suo nome
let lowestWeight = bikes[0].peso;
let lowestWeightBike;
// ad ogni iterazione controlla se il peso della bici 
// è inferiore al peso della bici precedente. Se è inferiore
// aggiorna il peso più basso e salva l'indice
// della bici con il peso minore trovato fino ad ora.
for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < lowestWeight) {
        lowestWeight = bikes[i].peso;
        lowestWeightBike = bikes[i];
    }
}
// stampa a schermo la bici di peso più basso trovata
document.getElementById("lowestWeight").innerHTML = `<div>Bici con peso minore con for loop: <span style="color: green;">${lowestWeightBike.nome}</span></div>`;

// con il metodo sort() - o toSorted() in questo caso
// per non modificare l'array originale - possiamo fornire
// una comparatorFn che restituisce 1, -1, 0 in base al valore
// che specifichiamo per return
let sortedBikes = bikes.toSorted(
    // passo alla arrow function i due oggetti dell'array
    // che verranno comparati
    (a, b) => {
    // se peso1 - peso2 = positiveNum restituisco 1 —> a > b
    // se peso1 - peso2 = negativeNum restituisco -1 —> a < b
    // se peso1 - peso2 = 0 restituisco 0 —> a = b
    return a.peso-b.peso;
});

// a questo punto mi troverò all'indice 0 dell'array di bici
// la bici con il peso minore
document.getElementById("lowestWeight").innerHTML += `<div>Bici con peso minore con sort() method: <span style="color: red;">${sortedBikes[0].nome}</span></div>`;

