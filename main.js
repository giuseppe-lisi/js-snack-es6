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

let lowestWeight = 100;
for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < lowestWeight) {
        lowestWeight = bikes[i].peso;
    }
    console.log(lowestWeight);
    
}

