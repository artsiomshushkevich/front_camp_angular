describe('Blogs http service', () => {
    let blogsService, httpBackend;
    const serverURL = 'http://localhost:3000/blogs';

    const blogs = [
        {
            _id: '1312',
            title: 'adadsasd',
            content: 'asdaadadsdas',
            createdAt: new Date().toString()
        },
        {
            
            _id: '1313',
            title: 'adadsasd',
            content: 'asdaadadsdas',
            createdAt: new Date().toString()
        }
    ];

    const title = 'adadsads';
    const content = 'adasdasd';
    const addedBlog = {
        _id: '123132131',
        title: title,
        content: content,
        createdAt: new Date().toString()
    };

    beforeEach(module('myAwesomeBlogs'));

    beforeEach(() => {
        inject(($injector) => {
            blogsService = $injector.get('blogsService');

            httpBackend = $injector.get('$httpBackend');

            httpBackend.whenGET(serverURL).respond(blogs);

            httpBackend.whenPOST(serverURL).respond((method, url, data) => {
                return [200, addedBlog, {}];
            });

        });
    });

    it('Should be defined', function() {
        httpBackend.flush();
        
        expect(blogsService).toBeDefined();
    });

    it('Should get all blogs', () => {
        let response;

        blogsService.getAll().then((response_) => response = response_);
        
        httpBackend.flush();

        expect(response).toBeDefined();
        expect(response.length).toEqual(2);
        
    });

    it('Should post new blog', () => {
        let response;

        blogsService.addOne(title, content)
            .then((response_) => response = response_[0]);
        
        httpBackend.flush();

        expect(response).toBeDefined();

        expect(response._id).toBeDefined();

        expect(response.createdAt).toBeDefined();
        expect(response.createdAt instanceof Date).toBeTruthy();
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    
});