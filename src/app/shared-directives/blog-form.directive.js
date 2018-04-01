(function(angular) {
    angular
        .module('myAwesomeBlogs')
        .directive('blogForm', function() {
            return {
                restrict: 'E',
                templateUrl: '../templates/shared-directives/blog-form.template.html',
                scope: {
                    title: '=',
                    content: '=',
                    onSubmit: '&onSubmit'
                }
            }
            
        });
})(window.angular);