// Creacion de una clase, para remover. que funcione en el main, al llamarla //

import LocalStorage from "./local-storage.js";

// CONTENEDOR DE ITEMS
const itemsContainer = document.getElementById('todo-items');
const inputDescription = document.getElementById('todo-item');

// vamos a llamar a los elementos de html que se necesiten

class Items {
// metodo para mostrarnos los elementos insertados en pantalla (mostrar el html creado)
/*static se usa para que usemos el metodo aunque creemos la clase o no*/
    static displayItems() {
      const items = LocalStorage.getItem();

     /*otra forma es: for(let 1 = 0; < items.length; 1++) {
        Items.addItem(items[i]);
      }*/

      items.forEach((item) => Items.addItem(item));
    }

    //metodo statico que sea agregar objeto, (crear un html a partir de este objeto)
    static addItem(item) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('item');
    //Inserto el html y vamos a reemplazar el texto, por la variable del objeto de forma dinamica($); primero colocamos item + elemento de item)
        /* se hizo uso de la clase creada en el main.js:
        class ToDoItem {
        constructor(completed, description, 
            index) {
              this.completed = completed;
              this.description = description
              this.index = index;
            }
        }*/
        todoDiv.innerHTML = `
        <div class="item__container">
          <div id="check-holder" class="item__container__checked items-circle" title=${item.completed}></div>
          <p class="item__container__item">${item.description}</p>
        </div>
    
        <button type="submit" id=${item.index}><img src="./assets/imagenes/icon-cross.svg" 
        alt="Icono de una X" class="remove"></button>
        `;/*le colocamos imagen de un icono de una X para que elimine*/
    
        //agregamos el ese elementoa nuestro contenedor principal
        itemsContainer.append(todoDiv);
    }

    // damos funcionalidad para remover el objeto, cuando le de click a X se elimine el elemento
    static removeItem(element) {
      element.parentElement.parentElement.remove();
      }



// crear metodo para limpiar la input
    static clearInput() {
      inputDescription.value = '';
    }
}

//Exportamos esta clase, que su nombre es items; una vez exportada la importa al main.js
export default Items;



