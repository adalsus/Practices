function insertionSort(array) {
    //Hecho por adalsus
    let verposiDelmin;
    let desde=0,avan=0;
    while (desde<=array.length-2) {
        let anclarAvan = undefined;
        for (avan=desde; avan<=array.length-2; avan++) {
            if (array[avan]!==array[avan+1]) {
                
                if (array[avan+1]<array[avan]) {
                    [array[avan],array[avan+1]] = [array[avan+1],array[avan]];
                    
                    if (anclarAvan===undefined) {anclarAvan=avan+1}
                    verposiDelmin = avan;
                    
                    if (verposiDelmin===0) {
                        desde = anclarAvan; break;
                    } else {
                        desde = avan-1; avan -= 2;
                    }
                }

            }
        }
        if (avan===array.length-1) {desde=array.length-1}
    }
    return array;
}


let lista = [5,8,1,0,-8,2,1,9,3,7,-5];
console.log(`Lista -> ${lista}`)
insertionSort(lista);
console.log(`Con insertionSort -> ${lista}`);