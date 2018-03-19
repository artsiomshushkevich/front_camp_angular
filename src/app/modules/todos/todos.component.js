(function(angular) {
    function TodosController(todosService) {
        const self = this;

        self.$onInit = () => {
            self.todos = todosService.getAll();
        };

        self.addOne = () => {

        }

        self.formatTodoDate = (date) => {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    }

    TodosController.$inject = ['todosService'];

    angular
        .module('myAwesomeTodos')
        .component('todos', {
            templateUrl: '../templates/todos.template.html',
            controller: TodosController
        });
})(window.angular);