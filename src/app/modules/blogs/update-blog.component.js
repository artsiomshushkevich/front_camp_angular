(function(angular) {
    function UpdateTodoController(blogsService, $state) {
        const self = this;
        
        self.submit = (description) => {
            blogsService.updateOne(self.blog.id, description);
            $state.go('home');
        };
    }

    UpdateTodoController.$inject = ['blogsService', '$state'];

    angular
        .module('myAwesomeBlogs')
        .component('updateTodo', {
            templateUrl: '../templates/blogs/update-blog.template.html',
            controller: UpdateTodoController,
            bindings: {
                blog: '<'
            }
        });
})(window.angular);