// genera un numero casuale in range inclusive
function randomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const squadre = [

    {nome: "Real Madrid", goal: 0, falliSubiti: 0},
    {nome: "Manchester City", goal: 0, falliSubiti: 0},
    {nome: "Bayern Monaco", goal: 0, falliSubiti: 0},
    {nome: "Juventus", goal: 0, falliSubiti: 0},
    {nome: "Paris Saint-Germain", goal: 0, falliSubiti: 0}

];

// genera numero di goal e falli subiti per ogni squadra
for (let i = 0; i < squadre.length; i++) {
    const squadra = squadre[i];
    squadra.goal = randomInt(1,20);
    squadra.falliSubiti = randomInt(10,50);
}

console.log(squadre);
