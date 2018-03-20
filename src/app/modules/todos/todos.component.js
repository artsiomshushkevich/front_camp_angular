(function(angular) {
    function TodosController(todosService) {
        const self = this;

        self.$onInit = () => {
            self.todos = todosService.getAll();

            self.fieldName = null;
            self.reverse = false
        };

        self.addOne = () => {

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

    TodosController.$inject = ['todosService'];

    angular
        .module('myAwesomeTodos')
        .component('todos', {
            templateUrl: '../templates/todos.template.html',
            controller: TodosController
        });
})(window.angular);