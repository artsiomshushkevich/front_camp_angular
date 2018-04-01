(function(angular) {
    angular
        .module('myAwesomeBlogs')
        .directive('blogForm', function() {
            return {
                restrict: 'E',
                templateUrl: './blog-form.template.html',
                scope: {
                    title: '<?',
                    content: '<?',
                    onSubmit: '&'
                }
            }
            
        });
})(window.angular);