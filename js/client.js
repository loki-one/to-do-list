var todoList = {

    todos : [],
    displayTodos : function(){
        console.log('My todos:',this.todos);
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
