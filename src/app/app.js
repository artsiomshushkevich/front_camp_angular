(function(angular) {
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        const states = [
            { 
                name: 'home', 
                url: '/blogs', 
                component: 'blogs',
                resolve: {
                    blogs: ['blogsService', (blogsService) => {
                        return blogsService.getAll()
                            .then(blogs => blogs);
                    }]
                }
            },
            {
                name: 'add',
                url: '/blogs/add',
                component: 'addBlog'
            },
            {
                name: 'update',
                url: '/blogs/{blogId}/update',
                component: 'updateBlog',
                resolve: {
                    blog: ['blogsService', '$transition$', (blogsService, $transition$) => {
                        return blogsService.getOne($transition$.params().blogId);
                    }]
                }
            }
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/blogs');
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    const app = angular
        .module('myAwesomeBlogs', ['ui.router', 'ngResource'])
        .config(config);
          
})(window.angular);