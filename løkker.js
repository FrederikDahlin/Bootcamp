
// for (let i = 1; i <= 25; i++){
//     console.log(i)
// }
// let i = 1;
// while (i <= 25) {
//     console.log(i);
//     i++;
// }
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } 
// while (i <= 25); 

// for (let i = 2017; i >= 1917; i--){
//     console.log(i);
// }

// ------- Virker ikke ordenligt
// let dage = [["Mandag"],["Tirsdag"],["Onsdag"],["Torsdag"],["Fredag"],["Lørdag"],["Søndag"]];
// for (dage[0]; dage <= dage[6]; dage++){
//     console.log(dage);
// }

// let dage = ["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"];
// for (let i = 0; i <= dage.length - 1; i++){
//     console.log(dage[i])
// }

// let navne = ["Lukas","Mads","Lars","Patrick","Magnus","Poul","Rasmus","Anders"];
// navne.forEach(function(navn){
//     console.log(navn);
// })

console.log("Her er mine favorit kunstnere i rækkefølge")
let fame = ["Gorillaz","Post Malone","Eminem","G-Eazy"];
fame.forEach(function(navn, index){
    console.log(navn + " er nummer " + index)
})