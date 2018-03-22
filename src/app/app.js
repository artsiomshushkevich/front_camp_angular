(function(angular) {
    // function config($stateProvider, $locationProvider) {
    //     $locationProvider.hashPrefix('!');

    //     var states = [
    //         { 
    //             name: 'home', 
    //             url: '/', 
    //             component: 'todos' 
    //         },
    //         {
    //             name: add,
    //             url: '/add-todo',
    //             component: 'addTodoForm'
    //         }
    //     ];

    //     states.forEach(function(state) {
    //         $stateProvider.state(state);
    //     });

    //     // $stateProvider.state("otherwise", { url : '/'});
    // }

    // config.$inject = ['$stateProvider', '$locationProvider'];
    console.log('asdasd')
    angular
        .module('myAwesomeTodos', [/*'ui.router'*/])
        // .config(config);
})(window.angular);