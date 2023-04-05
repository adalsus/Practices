const libreta = document.getElementById('listamenu').children;
console.log(libreta);

function apliDescuento() {
    const elemLista = document.getElementById('listar');
    if (elemLista.innerHTML === '') {
        const arrLista = [];
        for (let i=0; i<libreta.length; i++) {  
            let objKV = {
                class: libreta[i].className,
                consumo: libreta[i].firstChild.data,
                precio: libreta[i].firstElementChild.innerHTML
            }    
            arrLista.push(objKV);
        }
        //console.log(arrLista);
    
        arrLista.map( elem => {
            if (elem.class==='gaseosa') {
                elem.precio -= 0.25*elem.precio;
            }
            elemLista.innerHTML += `<li class=${elem.class}>${elem.consumo}<span>${elem.precio}</span></li>`;
            return elem;
        });
    }
}
