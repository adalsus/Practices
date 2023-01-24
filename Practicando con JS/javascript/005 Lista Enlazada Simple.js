//Hecho por adalsus

function Node(value) {
    this.dato = value;
    this.next = null;
}

function LinkedList() {
    this.tamaño = 0;
    this.head = undefined;
    LinkedList.prototype.gethead = function() {
        return this.head;
    };
    LinkedList.prototype.irAtail = function() {
        if (this.vacia()) {
            return 'vacia';
        } else {
            let tail = this.head;
            while (tail.next!==null) {
                tail = tail.next;
            }
            return tail;
        }
    };
    LinkedList.prototype.irAntestail = function() {
        if (this.vacia()) {
            return 'vacia';
        } else {
            if (this.gettamaño()===1) {
                return undefined;
            } else {
                let tail = this.head;
                let punt = 1;
                let tope = this.gettamaño()-1;
                while (punt<tope) {
                    tail = tail.next;
                    ++punt;
                }
                return tail;
            }
        }
    };
    LinkedList.prototype.gettamaño = function() {
        return this.tamaño===0 ? 'vacia' : this.tamaño;
    };
    LinkedList.prototype.vacia = function() {
        return this.tamaño===0 ? true : false;
    };
    LinkedList.prototype.getLista = function() {
        if (this.vacia()) {
            return console.log('vacia');
        } else {
            let reco = this.head;
            let all = reco.dato + '';
            while (reco.next!==null) {
                reco = reco.next;
                all += '-> ' + reco.dato;           
            }
            return console.log(all);
        }
    };
    LinkedList.prototype.add = function(dato) {
        if (this.head===undefined) {
            this.head = new Node(dato);
        } else {
            let cola = this.irAtail();
            cola.next = new Node(dato);
        }
        this.tamaño += 1;
    };
    LinkedList.prototype.remove = function() {
        if (this.vacia()) {
            return console.log('vacia');
        } else {
            let penul = this.irAntestail();
            if (penul===undefined) {
                var nuevohead;
                this.head = nuevohead;
            } else {
                let ndato = null;
                penul.next = ndato;
            }
            this.tamaño -= 1;
        }
    };
    LinkedList.prototype.search = function(var_p) {
        if (this.vacia()) {
            return console.log('vacia');
        } else {
            let reco = this.head;
            let tipoVar = typeof(var_p)!=='function';
            while (reco.next!=null) {
                if ((tipoVar) ? var_p===reco['dato'] : var_p(reco['dato'])) { 
                    return reco['dato']; } 
                reco = reco.next;
            }
            if ((tipoVar) ? var_p===reco['dato'] : var_p(reco['dato'])) { 
                return reco['dato']; }
            
            return null;
        }
    };
}

function Usuario(name, email, city) {
    this.name = name;
    this.email = email;
    this.city = city;
}


let list = new LinkedList();

console.log(list.gettamaño());
console.log(list.gethead());
list.add('1ero');
console.log(list.gettamaño());
console.log(list.gethead());
list.getLista();
list.add('2do');
list.getLista();
console.log(list.gettamaño());
list.add('3ero');
list.getLista();
console.log(list.gettamaño());
list.add('4to');
list.getLista();
console.log(list.gettamaño());
console.log('Elimino el último')
list.getLista();
list.remove();
console.log(`Tamaño: ${list.gettamaño()}`);
list.getLista();
list.remove();
console.log(`Tamaño: ${list.gettamaño()}`);
list.getLista();
list.remove();
console.log(`Tamaño: ${list.gettamaño()}`);
list.getLista();
console.log('última')
console.log(`Tamaño: ${list.gettamaño()}`);
console.log(`Tamaño: ${list.gettamaño()}`);
console.log('...al continuar, mejor no, pongo un dato');
list.add('nuevo item');

list.getLista();
console.log('MÁS')
list.add('1ero');
list.add('2do');
list.add('3ero');
list.add('4to');
list.getLista();
console.log(list.gettamaño());
console.log('Elimino el último')
list.remove();
list.getLista();
console.log(list.gettamaño());
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.add('PERFECTO');
list.getLista();
console.log(list.gettamaño());

list.add('casa');
list.add('auto');
list.add('three');
list.add('four');
    
console.log(list.search('two'));
console.log(list.search('sdd'));
console.log(list.search('casa'));
console.log(list.search('four'));

list.add(new Usuario('Ana', 'ana.morla@hotmail.com', 'Jamaica'));
list.add(new Usuario('Pedro', 'pedrocastro@gmail.com', 'Japón'));
list.add(new Usuario('Raul', 'mirados@outlook.com', 'Bolivia'));

console.log(list.search(function (user) {
    return user.name === 'Raul';
}).email);

console.log(list.search(function (user) {
    return user.email === 'pedrocastro@gmail.com';
}).city);

console.log(list.search(function (user) {
    return user.city === 'Jamaica';
}).name)

console.log(list.search(function(dato) {
    return dato === 'auto';
}));

console.log('\nCOMO QUEDÓ LA LISTA');
list.getLista();
console.log(`Total elementos de la lista: ${list.gettamaño()}`);