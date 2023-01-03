/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function escuchaWindowSize() {
    if (window.innerWidth<640) {
        X_bmDV01_click();
    } else {
        mi_bmDV01_click();
    }
}


function X_bmDV01_click() {
    const inJSidX_bmDV01_ = document.querySelector('#X_bmDV01_');
    const inJSidmi_bmDV01_ = document.querySelector('#mi_bmDV01_');
    const inJSidmenumain = document.querySelector('#menumain');
    inJSidX_bmDV01_.style.display = 'none';
    inJSidmi_bmDV01_.setAttribute('style', 'display: block; margin-left: auto;');
    inJSidmenumain.style.display = 'none';
}


function mi_bmDV01_click() {
    const inJSidX_bmDV01_ = document.querySelector('#X_bmDV01_');
    const inJSidmi_bmDV01_ = document.querySelector('#mi_bmDV01_');
    const inJSidmenumain = document.querySelector('#menumain');
    const inJSclassopmmTodos = document.querySelectorAll('.opmm');
    inJSidmi_bmDV01_.style.display = 'none';
    inJSidX_bmDV01_.setAttribute('style', 'display: block; margin-left: auto;');
    if (window.innerWidth>=640) {
        inJSidmenumain.setAttribute('style', 'display: flex; justify-content: space-around; align-items: center; \n\
                                                                background: #000000; color: #f0ff00; padding: 0.125em 0;');
        for (let elem of inJSclassopmmTodos) {
            elem.setAttribute('style', 'display: flex; color: #f0ff00; background: #000000;');
        }
    } else {
        inJSidmenumain.setAttribute('style', 'display: grid; place-items: center; height: auto; \n\
                                                                background: #000000; color: #f0ff00;');
        for (let elem of inJSclassopmmTodos) {
            elem.setAttribute('style', 'background: #000000;');
        }
    }
}

function mouseOver(e) {
    const inJSclassopmmTodos = document.querySelectorAll('.opmm');
    inJSclassopmmTodos[e].style.backgroundColor = 'red';
}

function mouseOut(e) {
    const inJSclassopmmTodos = document.querySelectorAll('.opmm');
    inJSclassopmmTodos[e].style.backgroundColor = 'black';
}

function opmmCursos_click() {
    escuchaWindowSize();
    location.href='pagweb_001.html#secCursos';
}