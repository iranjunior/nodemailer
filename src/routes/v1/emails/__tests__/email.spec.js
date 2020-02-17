const request = require('supertest');
const app = require('../../../../../app');

describe('Tests de envios de email', () => {
  it('Deve enviar email com sucesso', async () => {
    const response = await request(app).post('/v1/send').send({
      name: 'teste',
      email: 'teste@gmail.com',
      message: 'Ipsum sit voluptate excepteur amet consectetur velit cupidatat in adipisicing laborum ipsum proident. Pariatur ullamco officia ad incididunt mollit sunt. Nulla aute voluptate culpa enim fugiat incididunt et sint fugiat anim dolor elit. Exercitation aliqua minim culpa anim. Do velit proident consectetur cillum veniam dolore adipisicing minim cupidatat anim labore. Do consequat excepteur labore cupidatat non. Consectetur dolore ea sunt ad nisi aute nulla amet.',
    });
    expect(response.status).toBe(200);
  }, 10000);
});
