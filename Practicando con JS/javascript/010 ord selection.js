function selectionSort(array) {
    //Hecho por adalsus

    let casilla = 0;
    let posimenor;
    while (casilla < array.length-1) {
        posimenor = casilla;
        for(let revisar = casilla; revisar<=array.length-1; revisar++) {
            if (array[revisar+1]<array[posimenor]) {
                posimenor = revisar+1;
            }
        }
        if (posimenor!==casilla) {
            [ array[casilla] , array[posimenor] ] = [ array[posimenor] , array[casilla] ];
        }
        ++casilla;
    }

    return array
}

let lista = [5,8,3,1,0,5,-4,2,10,4,8];
console.log(`Lista -> ${lista}`)
selectionSort(lista);
console.log(`Con selectionSort -> ${lista}`);