const banco_de_dados = require('../../src/config/db/db-config');
const logger = require('../../src/config/logger/logger');
const Room = require('../../src/models/room');

describe('Room Model', async () => {

  beforeAll(async () => {
    try {
      await banco_de_dados.authenticate();
      logger.info('TEST - Conexão com banco de dados deu certo.');
    } catch (error) {
      logger.error('TEST - Conexão com banco de dados deu errado.');
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await banco_de_dados.close();
      logger.info('TEST - Banco fechado com sucesso.');
    } catch (error) {
      logger.error('TEST - Erro ao fechar o banco.');
      throw error;
    }
  });

  test('deve criar uma Room valida', async () => {
    const room = await Room.create({
      name: 'TEST-Room-01',
    });
    expect(room.name).toBe('TEST-Room-01');
  });

});


banco_de_dados.search(name);
