(function(angular) {
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        var states = [
            { 
                name: 'home', 
                url: '/', 
                component: 'todos' 
            },
            {
                name: 'add',
                url: '/add-todo',
                component: 'addTodoForm'
            }
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/');
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    angular
        .module('myAwesomeTodos', ['ui.router'])
        .config(config);
})(window.angular);