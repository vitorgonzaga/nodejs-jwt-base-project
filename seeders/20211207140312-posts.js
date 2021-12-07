module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Posts',
      [{
        id: 1,
        title: 'Título 1',
        content: 'Meu primeiro post.',
      },
      {
        id: 2,
        title: 'Titulo 2',
        content: 'Meu segundo post.',
      },
      {
        id: 3,
        title: 'Título 3',
        content: 'Meu terceiro post.',
      },
      {
        id: 4,
        title: 'Título 4',
        content: 'Meu quarto post',
      },{
        id: 5,
        title: 'Título 5',
        content: 'Meu quinto post',
      },
      {
        id: 6,
        title: 'Titulo 6',
        content: 'Meu último post',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};