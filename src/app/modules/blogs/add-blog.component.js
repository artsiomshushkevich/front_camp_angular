(function(angular) {
    function AddTodoController(blogsService, $state) {
        const self = this;

        self.submit = (description) => {
            blogsService.addOne(description);
            $state.go('home');
        };
    }

    AddTodoController.$inject = ['blogsService', '$state'];

    angular
        .module('myAwesomeBlogs')
        .component('addTodo', {
            templateUrl: '../templates/blogs/add-blog.template.html',
            controller: AddTodoController
        });
})(window.angular);