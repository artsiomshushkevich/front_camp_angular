(function(angular) {
    function TodosController(todosService) {
        const self = this;

        self.$onInit = () => {
            self.todos = todosService.getAll();
        };
    }

    TodosController.$inject = ['todosService'];

    angular
        .module('myAwesomeTodos')
        .component('todos', {
            templateUrl: '../templates/todos.template.html',
            controller: TodosController
        });
})(window.angular);