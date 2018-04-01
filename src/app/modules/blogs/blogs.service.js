(function(angular) {
    let blogs = null;
    const serverURL = 'http://localhost:3000/blogs';

    class BlogsService {   
        constructor($resource) {
            this._$resource = $resource;
        }

        getAll() {
            return this._$resource(serverURL).query({})
                .$promise.then((response) => {
                    blogs = response.map((blog) => {
                        blog.createdAt = new Date(blog.createdAt);
                        return blog;
                    });

                    return blogs;
                });
        }
        
        // return {
        //     // init: function() {
        //     //     return $resource('/data/blogs.json').query({})
        //     //         .$promise.then((response) => {
        //     //             blogs = response.map((blog) => {
        //     //                 blog.createdAt = new Date(blog.createdAt);
        //     //                 return blog;
        //     //             });

        //     //             return blogs;
        //     //         });
        //     // },
        //     getAll: function() {
        //         return blogs;
        //     },
        //     getOne: function(id) {
        //         const blogIndex = blogs
        //             .map(blog => blog.id)
        //             .indexOf(id);
                
        //             return blogIndex >= 0 ? blogs[blogIndex] : null;
        //     },
        //     deleteOne: function(id) {
        //         const indexOfDeletedTodo = blogs
        //             .map(blog => blog.id)
        //             .indexOf(id);

        //         blogs.splice(indexOfDeletedTodo, 1);
        //     },
        //     addOne: function(description) {
        //         var id = generateId();
        //         blogs.push({
        //             id: generateId(),
        //             isDone: false,
        //             description: description,
        //             createdAt: new Date()
        //         });
        //     },
        //     updateOne: function(id, description) {
        //         const blog = blogs.find(blog => blog.id === id);
        //         blog.description = description;
        //     }
        // };
    }
    
    BlogsService.$inject = ['$resource'];

    angular
        .module('myAwesomeBlogs')
        .service('blogsService', BlogsService);

})(window.angular);