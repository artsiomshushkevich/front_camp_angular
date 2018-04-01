(function(angular) {
    class AddBlogController {
        constructor(blogsService, $state) {
            this._blogsService = blogsService;
            this._$state = $state;
        }
       

        submit(title, content){
            this._blogsService.addOne(title, content)
                .then(() => this._$state.go('home'));
        }; 
    }

    AddBlogController.$inject = ['blogsService', '$state'];

    angular
        .module('myAwesomeBlogs')
        .component('addBlog', {
            templateUrl: './add-blog.template.html',
            controller: AddBlogController,
            bindings: {
                blog: '<'
            }
        });
})(window.angular);