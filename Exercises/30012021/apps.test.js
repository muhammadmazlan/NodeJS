const supertest = require('supertest');
const app = require('./apps');

it('Get /user the test endpoint', async()=>{
    const response = await supertest(app)
    .get('/user')
    .expect(401);

    expect(response.status).toBe(401);
    expect(typeof response.body).toBe('object');
});
it('Get /user/login the test endpoint', async()=>{
    const response = await supertest(app)
    .get('/user')
    .expect(401);

    expect(response.status).toBe(401);
    expect(typeof response.body).toBe('object');
});
it('Get /user/register the test endpoint', async()=>{
    const response = await supertest(app)
    .get('/user')
    .expect(401);

    expect(response.status).toBe(401);
    expect(typeof response.body).toBe('object');
});