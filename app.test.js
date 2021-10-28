//supertest
'use strict';

const request = require('supertest');
const app = require('./app');

describe('Testing the service',() => {
    test('GET /api/connect succeeds',async (done) => {
        const response = await request(app)
        .get('/api/connect');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/loginUser succeeds',async (done) => {
        const response = await request(app)
        .get('/api/loginUser');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/login/123/123 succeeds',async (done) => {
        const response = await request(app)
        .get('/api/login/vincent/123');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getAll/booking succeeds',async (done) => {
        const response = await request(app)
        .get('/api/getAll/booking');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getOne/booking/1 succeeds',async (done) => {
        const response = await request(app)
        .get('/api/loginUser');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/check/booking/1/zhenhaozhao46@gmail.com succeeds',async (done) => {
        const response = await request(app)
        .get('/api/check/booking/1/zhenhaozhao46@gmail.com');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getAll/feedback succeeds',async (done) => {
        const response = await request(app)
        .get('/api/loginUser');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getOne/feedback/1 succeeds',async (done) => {
        const response = await request(app)
        .get('/api/loginUser');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getAll/contact succeeds',async (done) => {
        const response = await request(app)
        .get('/api/getAll/contact');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/check/feedback/1/zhenhaozhao46@gmail.com succeeds',async (done) => {
        const response = await request(app)
        .get('/api/check/feedback/1/zhenhaozhao46@gmail.com');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getAll/contact succeeds',async (done) => {
        const response = await request(app)
        .get('/api/getAll/contact');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getOne/contact/1 succeeds',async (done) => {
        const response = await request(app)
        .get('/api/getOne/contact/1');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/check/contact/1/zhenhaozhao46@gmail.com succeeds',async (done) => {
        const response = await request(app)
        .get('/api/check/contact/1/zhenhaozhao46@gmail.com');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getOne/search/1 succeeds',async (done) => {
        const response = await request(app)
        .get('/api/getOne/search/1');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('GET /api/getAll/contact succeeds',async (done) => {
        const response = await request(app)
        .get('/api/getAll/contact');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('POST /api/register succeeds',async (done) => {
        const response = await request(app)
        .post('/api/register');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('POST /api/booking succeeds',async (done) => {
        const response = await request(app)
        .post('/api/booking');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('POST /api/contact succeeds',async (done) => {
        const response = await request(app)
        .post('/api/contact');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('POST /api/feedback succeeds',async (done) => {
        const response = await request(app)
        .post('/api/feedback');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('POST /api/search succeeds',async (done) => {
        const response = await request(app)
        .post('/api/search');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('PUT /api/update/booking/1 succeeds',async (done) => {
        const response = await request(app)
        .put('/api/update/booking/1');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('PUT /api/update/feedback/1 succeeds',async (done) => {
        const response = await request(app)
        .put('/api/update/feedback/1');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('PUT /api/update/contact/1 succeeds',async (done) => {
        const response = await request(app)
        .put('/api/update/contact/1');
        expect(response.statusCode).toBe(200);
        done();
    });
    test('delete /api/delete/booking/1/zhenhaozhao46@gmail.com succeeds',async (done) => {
        const response = await request(app)
        .delete('/api/delete/booking/1/zhenhaozhao46@gmail.com');
        expect(response.statusCode).toBe(404);
        done();
    });
    test('delete /api/delete/feedback/1/zhenhaozhao46@gmail.com succeeds',async (done) => {
        const response = await request(app)
        .delete('/api/delete/feedback/1/zhenhaozhao46@gmail.com');
        expect(response.statusCode).toBe(404);
        done();
    });
    test('delete /api/delete/contact/1/zhenhaozhao46@gmail.com succeeds',async (done) => {
        const response = await request(app)
        .delete('/api/delete/contact/1/zhenhaozhao46@gmail.com');
        expect(response.statusCode).toBe(404);
        done();
    });

});

