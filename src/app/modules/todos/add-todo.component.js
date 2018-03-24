(function(angular) {
    function AddTodoController(todosService, $state) {
        const self = this;

        self.submit = (description) => {
            todosService.addOne(description);
            $state.go('home');
        };
    }

    AddTodoController.$inject = ['todosService', '$state'];

    angular
        .module('myAwesomeTodos')
        .component('addTodo', {
            templateUrl: '../templates/todos/add-todo.template.html',
            controller: AddTodoController
        });
})(window.angular);