var todoList = {

    todos : [],
    displayTodos : function(){
      if(this.todos.length === 0){
        console.log('Your todo list is empty');
      }else{
        console.log('My todos:');
        for(var i=0; i<this.todos.length;i++){
            if(this.todos[i].completed){
              console.log('(x)',this.todos[i].todoText);
            }else{
              console.log('( )',this.todos[i].todoText);
            }
          }
      }
    },
    addTodo : function(todoText){
      this.todos.push({
                todoText: todoText,
                completed: false
                });
      this.displayTodos();
    },
    changeTodo : function(position, newTodoText){
      this.todos[position].todoText = newTodoText;
      this.displayTodos();
    },
    deleteTodo : function(position){
      this.todos.splice(position,1);
      this.displayTodos();
    },
    toggleCompleted : function(position){
      var todoItem = this.todos[position];
      todoItem.completed = !todoItem.completed;
      this.displayTodos();
    }
}
