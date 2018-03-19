(function(angular) {
    function todosService() {   
        let todos = [
            {
                isDone: false,
                description: 'buy bread',
                createdAt: new Date('12-10-2017')
            },
            {
                isDone: false,
                description: 'do homework',
                createdAt: new Date('12-15-2017')
            },
            {
                isDone: true,
                description: 'clean dishes',
                createdAt: new Date('12-18-2017')
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