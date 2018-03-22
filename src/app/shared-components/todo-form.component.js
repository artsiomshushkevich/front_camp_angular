(function(angular) {
    function TodoFormController() {
        $ctrl.submit = function() {

        };
    }

    TodoFormController.$inject = [];
    
    angular
        .module('myAwesomeTodos')
        .component('todoForm', {
            templateUrl: '../templates/shared-components/todo-form.template.html',
            controller: TodoFormController
        });
})(window.angular);