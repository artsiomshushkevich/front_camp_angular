(function(angular) {
    class UpdateBlogController {
        constructor(blogsService, $state) {
            this._blogsService = blogsService;
            this._$state = $state;
        }

        submit(title, content) {
            this._blogsService.updateOne(this.blog._id, title, content)
                .then(() => this._$state.go('home'));
        };
    }

    UpdateBlogController.$inject = ['blogsService', '$state'];

    angular
        .module('myAwesomeBlogs')
        .component('updateBlog', {
            templateUrl: './update-blog.template.html',
            controller: UpdateBlogController,
            bindings: {
                blog: '<'
            }
        });
})(window.angular);