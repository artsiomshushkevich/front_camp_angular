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

        getOne(id) {
            return blogs.find(blog => blog._id === id);
        }

        deleteOne(id) {
            return this._$resource(`${serverURL}/:id`, {id: '@id'})
                .delete({id: id})
                .$promise.then((deletedBlog) => {
                    const indexOfDeletedblog = blogs.map(blog => blog._id).indexOf(deletedBlog._id);
                    blogs.splice(indexOfDeletedblog, 1);

                    return blogs;
                });
        }

        addOne(title, content) {
            const newBlog = {
                title,
                content
            };

            return this._$resource(serverURL).save({}, newBlog)
                .$promise.then((addedBlog) => {
                    addedBlog.createdAt = new Date(addedBlog.createdAt);
                    if(blogs === null) {
                        blogs = [];
                    }
                    
                    blogs.push(addedBlog);

                    return blogs;
                });
        }

        updateOne(id, title, content) {
            const newBlogData = {
                title,
                content
            };

            const blog = this._$resource(`${serverURL}/:id`, {id: '@id'}, {
                'update': {
                    method: 'PUT'
                }
            });

            return blog.update({id: id}, newBlogData)
                .$promise.then((updatedBlog) => {
                    let blogInBlogsList = blogs.find(blog => blog._id === updatedBlog._id);
                    blogInBlogsList.title = updatedBlog.title;
                    blogInBlogsList.content = updatedBlog.content;

                    return blogs;
                });
        }
    }
    
    BlogsService.$inject = ['$resource'];

    angular
        .module('myAwesomeBlogs')
        .service('blogsService', BlogsService);

})(window.angular);