describe('Blogs component', () => {
    let $componentController;

    beforeEach(module('myAwesomeBlogs'));

    beforeEach(() => {
        inject(($injector) => {
            $componentController = $injector.get('$componentController');
        });
    });

    it('Should set appropriate sort type', () => {
        let ctrl = $componentController('blogs', null, null);

        ctrl.sortBy('name');
        expect(ctrl.fieldName).toEqual('name');
    }); 

    it('Should store blogs if they are passed via component bindings', () => {
        const bindings = {
            blogs: [{},{}]
        };

        let ctrl = $componentController('blogs', null, bindings);

        expect(ctrl.blogs.length).toEqual(2);
    });

    it('Should format any Date object to dd.mm.yyyy format', () => {
        let ctrl = $componentController('blogs', null, null);

        const formattedDate = ctrl.formatBlogDate(new Date('12/13/2018'));

        expect(formattedDate).toEqual('13.12.2018');
    });
});