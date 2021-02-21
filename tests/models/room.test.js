const banco_de_dados = require('../../src/config/db/db-config');
const logger = require('../../src/config/logger/logger');
const Sala = require('../../src/models/Sala');

describe('Sala Model', async () => {

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

  test('deve criar uma sala valida', async () => {
    const Sala = await Sala.create({
      name: 'TEST-Sala-01',
    });
    expect(Sala.name).toBe('TEST-Sala-01');
  });

});


banco_de_dados.search(name);
