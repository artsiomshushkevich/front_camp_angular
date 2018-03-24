(function(angular) {
    function TodoFormController() {
        const self = this;

        self.submit = () => {
            self.onSubmit({description: self.description});
        };
    }

    TodoFormController.$inject = [];
    
    angular
        .module('myAwesomeTodos')
        .component('todoForm', {
            templateUrl: '../templates/shared-components/todo-form.template.html',
            controller: TodoFormController,
            bindings: {
                description: '<',
                onSubmit: '&'
            }
        });
})(window.angular);