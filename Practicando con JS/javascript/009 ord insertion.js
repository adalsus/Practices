function insertionSort(array) {
    //Hecho por adalsus
    let iscomoMenor;
    let verposiDelmin;
    let desde=0,avan=0;
    while (avan<=array.length-2) {
        for (avan=desde; avan<=array.length-2; avan++) {
            if (array[avan]!==array[avan+1]) {
                
                if (array[avan+1]<array[avan]) {
                    [array[avan],array[avan+1]] = [array[avan+1],array[avan]];
                    iscomoMenor=array[avan]; verposiDelmin = avan;
                    
                    if (verposiDelmin===0) {
                        desde = avan+1; break;
                    } else { 
                        desde = avan-1; avan -= 2;
                    }
                }

            }
        }
    }
    return array;
}


let lista = [5,8,2,1,0,-8,2,10,5];
console.log(`Lista -> ${lista}`)
insertionSort(lista);
console.log(`Con insertionSort -> ${lista}`);