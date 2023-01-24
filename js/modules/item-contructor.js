// constructor en class 

    /*(en clases la primera letra es mayuscula), this se utiliza para hacer que los elemtos sean globale(mi variable tenga ecceso en todo el metodo)
    el constructor, nos permite crear objetos a partir de nuestra 
    forma predeterminada*/
    class ToDoItem {
        constructor(completed, description, 
          index) {
            this.completed = completed;
            this.description = description
            this.index = index;
          }
      }

      // lo exportamos
      export default ToDoItem;
      
