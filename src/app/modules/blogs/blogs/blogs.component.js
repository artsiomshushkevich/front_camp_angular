(function(angular) {
    class BlogsController {
        constructor(blogsService, $state) {
            this._blogsService = blogsService;
            this._$state = $state;
        }

        $onInit() {
            this.fieldName = null;
            this.reverse = false
        }

        addOne() {
            this._$state.go('add');
        }

        updateOne(id) {
            this._$state.go('update', {
                blogId: id
            });
        }

        deleteOne(id){
            this._blogsService.deleteOne(id);
        }

        sortBy(fieldName){
            this.reverse = (this.fieldName === fieldName) ? !this.reverse : false;
            this.fieldName = fieldName;
        }

        resetSort() {
            this.fieldName = null;
            this.reverse = false
        }

        formatBlogDate(date) {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    }

    BlogsController.$inject = ['blogsService', '$state'];

    angular
        .module('myAwesomeBlogs')
        .component('blogs', {
            templateUrl: './blogs.template.html',
            controller: BlogsController,
            bindings: {
                blogs: '<'
            }
        });
})(window.angular);