function binAdec(num) {
    //Hecho por adalsus
    let numrh = num.split('').reverse().join('');
    console.log('rh = ',numrh);
    let enDec = 0;
    for (let k in numrh) {
        console.log(`k = ${k}`);
        if (numrh[k]==='1') {
            enDec += 2**k;
        }
    }
    return enDec;
}
console.log('\nConversión de Binario a Decimal');
let snumBin = '111010101';
console.log(`binario: ${snumBin}`);
console.log(`${binAdec(snumBin)} en decimal`);


function decAbin(num) {
    //Hecho por adalsus
    let numU = Math.abs(num);
    let sresi = (numU>1) ? '' : numU+''; 
    while (numU>1) {
       sresi = ( (numU % 2)+'' ) + sresi;
       numU = Math.trunc( numU/2 );
       if (numU===1) { sresi = (numU+'') + sresi; }
    }
    return sresi;
}

console.log('\nConversión de Decimal a Binario');
let snumDec = 233546;
console.log(`decimal: ${snumDec}`);
console.log(`${decAbin(snumDec)} en binario`);