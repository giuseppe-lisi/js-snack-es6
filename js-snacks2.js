// genera un numero casuale in range inclusive
function randomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const teams = [

    {name: "Real Madrid", goals: 0, receivedFouls: 0},
    {name: "Manchester City", goals: 0, receivedFouls: 0},
    {name: "Bayern Monaco", goals: 0, receivedFouls: 0},
    {name: "Juventus", goals: 0, receivedFouls: 0},
    {name: "Paris Saint-Germain", goals: 0, receivedFouls: 0}

];

const teamsNames = [];

const teamsNamesAndFouls = [];

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    // genera numero di goal e falli subiti per ogni squadra
    team.goals = randomInt(1,20);
    team.receivedFouls = randomInt(10,50);
    // pusha il nome della squadra in un nuovo array di stringhe
    teamsNames.push(team.name);
    // pusha in un altro array un nuovo oggetto che contiene 
    // il nome e i falli della squadra
    teamsNamesAndFouls.push({nome: team.name, receivedFouls: team.receivedFouls});
}

console.log(teams);
console.log(teamsNames);
console.log(teamsNamesAndFouls);

