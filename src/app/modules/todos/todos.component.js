(function(angular) {
    function TodosController(todosService, $state) {
        const self = this;

        self.$onInit = () => {
            self.todos = todosService.getAll();

            self.fieldName = null;
            self.reverse = false
        };

        self.addOne = () => {
            $state.go('add');
        }; 

        self.updateOne = () => {

        };

        self.deleteOne = (id) => {
            todosService.deleteOne(id);
        };

        self.sortBy = (fieldName) => {
            self.reverse = (self.fieldName === fieldName) ? !self.reverse : false;
            self.fieldName = fieldName;
        };

        self.resetSort = () => {
            self.fieldName = null;
            self.reverse = false
        };

        self.formatTodoDate = (date) => {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        };
    }

    TodosController.$inject = ['todosService', '$state'];

    angular
        .module('myAwesomeTodos')
        .component('todos', {
            templateUrl: '../templates/todos/todos.template.html',
            controller: TodosController
        });
})(window.angular);