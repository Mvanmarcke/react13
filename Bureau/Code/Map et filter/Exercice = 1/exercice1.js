const pricesInCents = [2999, 1899, 3789, 4199];
let pricesInEuro = []
for(let i = 0; i < pricesInCents.length; i++){
    pricesInEuro.push(pricesInCents[i]/100)
}
console.log(pricesInEuro)