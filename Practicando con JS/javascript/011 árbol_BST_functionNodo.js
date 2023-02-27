//Hecho por adalsus

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/*Forma con class
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
*/

function BinarySearchTree() {
//Con class sería -> class BinarySearchTree {

  this.root = undefined;
  /* Forma dentro del class
    constructor() {
    // initialize the root
    this.root = undefined;
  }
  */

  BinarySearchTree.prototype.insert = (value, isRecursive) => {
  /*Si use class a dentro sería:
  insert(value, isRecursive) {
  */

    if (!isRecursive) return this._insertIterative(value)
    return this._insertRecursive(value)

  };

  BinarySearchTree.prototype.vacia = function() {
    return (this.root===undefined || this.root === null) ? true : false;
  };

  BinarySearchTree.prototype._insertIterative = (value) => {
    // Crear un nuevo nodo con el valor que se le pasa
    const newNode = new Node(value)
      
    // Si el árbol está vacío, hacer que el nuevo nodo sea la raíz y retorna el value
    if (this.root === undefined || this.root === null) {
      this.root = newNode;
      return this.root.value;
    }
      
    // Método de inserción iterativo que se llamará si el árbol no está vacío:
    const iterativeInsert = (currentNode, value) => {
      while (true) {
        // Si el valor ya existe en el árbol,
        // lanzar un error o controlarlo:
        if (value === currentNode.value) {
          // Si desea que arroje un error en los duplicados.  OPCIONAL: 
          // sustituye la línea de abajo por return
          //throw new Error("Valor duplicado no permitido");
          return 'Valor duplicado no permitido';
        }
          
        // Comprueba si el valor de entrada es menor que el valor del nodo actual
        if (value < currentNode.value) {
          // Si el hijo izquierdo es nulo, inserta el nuevo nodo como hijo izquierdo
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return currentNode.left.value;
          }
          // Si el hijo izquierdo no es nulo, mueve el nodo actual al hijo izquierdo
          currentNode = currentNode.left
        } else {
          // Comprueba si el valor de entrada es mayor que
          // o igual al valor del nodo actual
          if (currentNode.right === null) {
            // Si el hijo derecho es nulo, inserta el nuevo nodo como hijo derecho
            currentNode.right = newNode;
            return currentNode.right.value;
          } else {
            // Si el hijo derecho no es nulo, mueve el nodo actual al hijo derecho
            currentNode = currentNode.right
          }
        }
      }
    }
  
    // Llamar al método interno con el nodo raíz
    // como punto de partida, y el valor como objetivo:
    return iterativeInsert(this.root, value)
  }

  // Inserción recursiva
  BinarySearchTree.prototype._insertRecursive = (value) => {
    // Crear un nuevo nodo con el valor que se le pasa
    const newNode = new Node(value)

    // si el árbol está vacío, inserta el nuevo nodo como raíz y lo retorna
    if (this.root === undefined || this.root === null) {
      this.root = newNode
      return this.root.value;
    }
    
    // Recursive insert method to be called if the root is not empty:
    const recursiveInsert = (currentNode, value) => {
        // If the value already exists in the tree, throw an error or silently fail:
        if (value === currentNode.value) {
          // Si desea que arroje un error en los duplicados.  OPCIONAL: 
          // sustituye la línea de abajo por return
          //throw new Error("Valor duplicado no permitido")
          return 'Valor duplicado no permitido';
        }

        // si el valor es mayor que el valor del nodo actual, ir a la derecha
        if (value > currentNode.value) {
            // si no hay ningún hijo derecho, inserte el nuevo nodo aquí
            if (currentNode.right === null) {
              currentNode.right = newNode;
              return currentNode.right.value;
            } else {
                // en caso contrario, llamar recursivamente a insertar en el hijo derecho
                return recursiveInsert(currentNode.right, value)
            }
        } else {
            // si el valor es menor que el valor del nodo actual, ir a la izquierda
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return currentNode.left.value;
            } else {
                // en caso contrario, llamar recursivamente a insertar en el hijo izquierdo
                return recursiveInsert(currentNode.left, value)
            }
        }
    }
    
    // Llamar al método interno con el nodo raíz
    // como punto de partida, y el valor como objetivo:
    return recursiveInsert(this.root, value);
  }

  // Muestra un array que representará el árbol
  // en orden de nivel, con cada submatriz representando un nivel del árbol.
  BinarySearchTree.prototype.showAsLevelOrdered = () => {
    // Crear una matriz vacía para almacenar los nodos recorridos
    const temp = []
    // Crear una matriz para realizar un seguimiento del nivel actual de los nodos
    const queue = []

    // Si el árbol tiene una raíz, añádela a la cola
    if (this.root) {
      queue.push(this.root)      
    }
    //console.log(queue);

    // Sigue recorriendo el árbol mientras haya nodos en la cola
    while (queue.length) {
      // Crea un array para almacenar los nodos del nivel actual
      const subTemp = []
      // Almacena el número de nodos del nivel actual
      const len = queue.length

      // Iterar a través del nivel actual de nodos
      for (let i = 0; i < len; i += 1) {
        // Poner en cola el primer nodo de la cola
        const node = queue.shift()
        // Introduce el valor del nodo en la matriz subTemp
        subTemp.push(node.value)
        // Si el nodo tiene un hijo izquierdo, añádelo a la cola
        if (node.left) {
          queue.push(node.left)
        }
        // Si el nodo tiene un hijo derecho, añádelo a la cola
        if (node.right) {
          queue.push(node.right)
        }
      }

      // Pone el array subTemp al array temp
      temp.push(subTemp)
    }
    // Devuelve el array temp final
    return temp
  }

}

let UnArbol = new BinarySearchTree();
console.log(UnArbol.insert(20, true));//true significa que inserta de manera recursiva
console.log(UnArbol.insert(18, false));//false significa que inserta de manera iterativa
console.log(UnArbol.insert(25, true));
console.log(UnArbol.insert(25, false));
console.log(UnArbol.insert(19, true));
console.log(UnArbol.insert(15, false));
console.log(UnArbol.insert(21, false));
console.log(UnArbol.showAsLevelOrdered());
console.log('\n');
console.log(UnArbol);