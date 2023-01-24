// Importar nuestros Modulos
import Items from "./modules/add-remove.js";
import ToDoItem from "./modules/item-contructor.js";
import LocalStorage from "./modules/local-storage.js";

// Importar los estilos 
import '../assets/styles/style.scss';

// Constantes iniciales 
const main = document.getElementById('main');
const form = document.getElementById('form');
/*crear la imput */
const inputDescription = document.getElementById('todo-item');

const itemsContainer = document.getElementById('todo-cont');

// Llamar data si existe en cuando cargue la pagina
Items.displayItems();


// Creamos Funcionalidad //

/*Escuchador de eventos por click */
//Evento de escucha de la forma
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Evento de escucha main para ingresar elementos
main.addEventListener('keypress', (e) => {
  // Obtener los valores
const description = inputDescription.value;

// Validacion
if(description == '') {
  // vacia por ahora, para luego llamar la funciom validadora
}

  // Mandar los valores, 
  /*al tocar enter va ir agregando lo ingresado)
  agrego despues de enter, para que al precionar enter y no haya escito nada, no haga registro(creamos validacion)*/
  if(e.key === 'Enter' && description != '') {
    const item = new ToDoItem(false, description);

    // Agregar un nuevo todo
    Items.addItem(item);

// Agregar el LocalStore
LocalStorage.addItem(item);

    // Limpiar la input
    Items.clearInput();
  }
});

// Evento de escucha, para remover elementos
itemsContainer.addEventListener('click', (e) => {
  // Remover Elemento
  if(e.target.classList.contains('remove')){
    Items.removeItem(e.target);

    //metodos que permiten remover el elemento indicado
    LocalStorage.removeItem(
      e.target.parentElement.previousElementSibling.lastElementChild.textContent,
    );
  }
});

