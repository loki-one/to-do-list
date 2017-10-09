var todoList = {

    todos : [],
    addTodo : function(todoText){
      this.todos.push({
                todoText: todoText,
                completed: false
                });
    },
    changeTodo : function(position, newTodoText){
      this.todos[position].todoText = newTodoText;
    },
    deleteTodo : function(position){
      this.todos.splice(position,1);
    },
    toggleCompleted : function(position){
      var todoItem = this.todos[position];
      todoItem.completed = !todoItem.completed;
    },
    toggleAll : function(){
      var totalTodos = this.todos.length;
      var completedTodos = 0;

      for(var i=0; i<this.todos.length; i++){
          if(this.todos[i].completed === true){
            completedTodos++;
          }
      }

      if(completedTodos === totalTodos){
          for(var i=0; i<this.todos.length; i++){
            this.todos[i].completed = false;
          }
      }else {
          for(var i=0; i<this.todos.length; i++){
            this.todos[i].completed = true;
          }
      }
    }
};

//All methods that handles different events are under handlers
var handlers = {
    addTodo: function(){
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      view.displayTodos();
    },
    changeTodo: function(){
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
      view.displayTodos();
    },
    deleteTodo: function(){
      var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = '';
      view.displayTodos();
    },
    toggleCompleted: function(){
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = '';
      view.displayTodos();
    },
    toggleAll: function(){
      todoList.toggleAll();
      view.displayTodos();
    },
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i=0;i<todoList.todos.length;i++){
      var todosLi = document.createElement('li');
      var todo = todoList.todos[i]
      var todoTextWithCompletion = '';
      if(todo.completed === true){
        todoTextWithCompletion = "(x) "+ todo.todoText;
      }else{
        todoTextWithCompletion = "( ) "+ todo.todoText;
      }
      todosLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todosLi);
    }
  }
};
