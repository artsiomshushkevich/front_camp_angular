(function(angular) {
    function UpdateTodoController(todosService, $state) {
        const self = this;
        
        self.submit = (description) => {
            todosService.updateOne(self.todo.id, description);
            $state.go('home');
        };
    }

    UpdateTodoController.$inject = ['todosService', '$state'];

    angular
        .module('myAwesomeTodos')
        .component('updateTodo', {
            templateUrl: '../templates/todos/update-todo.template.html',
            controller: UpdateTodoController,
            bindings: {
                todo: '<'
            }
        });
})(window.angular);