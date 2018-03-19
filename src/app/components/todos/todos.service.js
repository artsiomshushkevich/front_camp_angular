(function(angular) {
    function todosService() {   
        let todos = [
            {
                isDone: false,
                description: 'buy bread'
            },
            {
                isDone: false,
                description: 'do homework'
            },
            {
                isDone: true,
                description: 'clean dishes'
            }
        ];

        return {
            getAll: function() {
                return todos;
            }
        };
    }
    
    todosService.$inject = [];

    angular
        .module('myAwesomeTodos')
        .factory('todosService', todosService);

})(window.angular);