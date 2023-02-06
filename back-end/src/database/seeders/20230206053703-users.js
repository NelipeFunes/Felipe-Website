module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Felipe Sousa',       
        password: '$2a$12$uNbeKKpmTMY64ML8VsOsYeDWZ8ncvantxMqG1K.9kkHAxzJOzxd4y',
        // senha: felipesousa123
        email: 'felipesousasiu@email.com',
        driver: true,
        admin: false,
        birthday: new Date('1999-08-25'),
        controller: 'Volante TMX Thrustmaster',
      },

      {
        name: 'Lucas Yan',       
        password: '$2a$12$AaCqNcMj5jCHSPHrkztsFuDcpZLn0/AiE4z1GpXnxxmZagrWQHRCK',
        // senha: lucas123
        email: 'lucasyan@email.com',
        driver: true,
        admin: true,
        birthday: new Date('1999-08-25'),
        controller: 'Volante Logitech G29',
      },

      {
        name: 'Maicon Millioranza',       
        password: '$2a$12$X5cqTSHYScKasmtXxu2y6OAddM2x4h2r6/AShVgixdi0SHNRcQ2lG',
        // senha: maicao123
        email: 'micomi@email.com',
        driver: false,
        admin: true,
        birthday: new Date('1989-06-13'),
        controller: '',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};