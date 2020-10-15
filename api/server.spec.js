const supertest = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {

        it('should return 200 OK', () => {
            // need to run the server
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        // the res object has a property called body
        // test for the body has an api property with value "up"
        it('should return api property with value up', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.body.api).toBe("up");
            });
        });

        it('should return api property with value up', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ api: "up" });
            });
        });

        it('should return JSON', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });
});

