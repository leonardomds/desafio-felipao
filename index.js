let nomeHeroi = "Braddock";
let expHeroi = 10500;
let nivel;

if (expHeroi < 1000) {
    nivel = "Ferro";
} else if (expHeroi >= 1000 && expHeroi <= 2000) {
    nivel = "Bronze";
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
    nivel = "Prata";
} else if (expHeroi >= 5001 && expHeroi <= 7000) {
    nivel = "Ouro";
} else if (expHeroi >= 7001 && expHeroi <= 8000) {
    nivel = "Platina";
} else if (expHeroi >= 8001 && expHeroi <= 9000) {
    nivel = "Ascendente";
} else if (expHeroi >= 9001 && expHeroi <= 10000) {
    nivel = "Imortal";
} else if (expHeroi > 10000) {
    nivel = "Radiante";
}

let frase = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;
console.log(frase);

