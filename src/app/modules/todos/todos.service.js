(function(angular) {
    function todosService() {   
        let todos = [
            {
                id: 0,
                isDone: false,
                description: 'buy bread',
                createdAt: new Date('12-10-2017')
            },
            {
                id: 1,
                isDone: false,
                description: 'do homework',
                createdAt: new Date('12-15-2017')
            },
            {
                id: 2,
                isDone: true,
                description: 'clean dishes',
                createdAt: new Date('12-18-2017')
            }
        ];

        const generateId = function() {
            return todos.length;
        };

        return {
            getAll: function() {
                return todos;
            },
            getOne: function(id) {
                const todoIndex = todos
                    .map(todo => todo.id)
                    .indexOf(id);
                
                    return todoIndex >= 0 ? todos[todoIndex] : null;
            },
            deleteOne: function(id) {
                const indexOfDeletedTodo = todos
                    .map(todo => todo.id)
                    .indexOf(id);

                todos.splice(indexOfDeletedTodo, 1);
            },
            addOne: function(description) {
                var id = generateId();
                todos.push({
                    id: generateId(),
                    isDone: false,
                    description: description,
                    createdAt: new Date()
                });
            },
            updateOne: function(id, description) {
                const todo = todos.find(todo => todo.id === id);
                todo.description = description;
            }
        };
    }
    
    todosService.$inject = [];

    angular
        .module('myAwesomeTodos')
        .factory('todosService', todosService);

})(window.angular);