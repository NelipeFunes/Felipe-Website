module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
  
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      admin: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
  
      birthday: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
  
      controller: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      platform: {
        allowNull: true,
        type: Sequelize.STRING,
      },

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
}