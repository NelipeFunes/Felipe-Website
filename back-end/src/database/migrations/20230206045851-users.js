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
  
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
  
      birthday: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
  
      license: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
  
      controller: {
        allowNull: true,
        type: Sequelize.STRING,
      }

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
}