(function(angular) {
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        var states = [
            { 
                name: 'home', 
                url: '/todos', 
                component: 'todos'
            },
            {
                name: 'add',
                url: '/todos/add',
                component: 'addTodo'
            },
            {
                name: 'update',
                url: '/todos/{todoId}/update',
                component: 'updateTodo',
                resolve: {
                    todo: ['todosService', '$transition$', (todosService, $transition$) => {
                        return todosService.getOne(+$transition$.params().todoId);
                    }]
                }
            }
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/todos');
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    const app = angular
        .module('myAwesomeTodos', ['ui.router', 'ngResource'])
        .config(config);
          
})(window.angular);