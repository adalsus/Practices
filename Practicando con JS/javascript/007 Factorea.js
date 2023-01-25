function factorear(num) {
    //Hecho por adalsus
    
    let num_a = num<0 ? -num : num;
    switch (num_a) {
    case 0:
        return [0];
    case 1:
        return [1];
        
    default:
        let allfactores = [1];
        let divisor = 1; 
        while (num_a>1) {
            ++divisor;
            while (num_a%divisor === 0) {
                num_a /= divisor;
                allfactores.push(divisor);
            }
        }
        return allfactores;
    }
}

let valor = 2001355;
console.log(`\nLa lista, luego de factorear el ${valor} es esta: `)
console.log(factorear(valor));