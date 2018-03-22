(function(angular) {
    function AddTodoFormController(todosService, $state) {
        const self = this;


    }

    AddTodoFormController.$inject = ['todosService', '$state'];

    angular
        .module('myAwesomeTodos')
        .component('addTodoForm', {
            templateUrl: '../templates/todos/add-todo-form.template.html',
            controller: AddTodoFormController
        });
})(window.angular);