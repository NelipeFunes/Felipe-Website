module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Felipe Sousa',       
        password: '$2a$12$uNbeKKpmTMY64ML8VsOsYeDWZ8ncvantxMqG1K.9kkHAxzJOzxd4y',
        // senha: felipesousa123
        email: 'felipesousasiu@email.com',
        admin: true,
        birthday: new Date('1999-08-25'),
        controller: 'Fanatec DD1',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};