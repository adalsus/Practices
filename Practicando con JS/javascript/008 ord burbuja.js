function bubbleSort(array) {
    //Hecho por adalsus
    let tope = array.length; 
    while (tope>1) {
        --tope;
        for (let head=0; head<=tope; head++) {
            if (array[head]!==array[head+1]) {
                if (array[head]>array[head+1]) {
                    [array[head],array[head+1]] = [array[head+1],array[head]];
                }
            }
        }
    }
    return array;
}


let lista = [5,8,2,1,0,5,12,6];
console.log(`Lista -> ${lista}`)
bubbleSort(lista);
console.log(`Con bubbleSort -> ${lista}`);