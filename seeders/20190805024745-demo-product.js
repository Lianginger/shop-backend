'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Macbook Air',
          image: 'https://picsum.photos/id/0/300/300',
          description: '這款最受喜愛的 Mac，即將讓你再次心動不已。全新 MacBook Air 更加纖薄、更為輕盈，並配備具有「原彩」顯示技術的亮麗 Retina 顯示器',
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'MacBook Pro',
          image: 'https://picsum.photos/id/0/300/300',
          description: 'MacBook Pro 將筆記型電腦的效能與攜帶的便利性提升至全新境界。擁有效能卓越的處理器與記憶體、先進的繪圖處理、速度飛快的儲存裝置與其他更多強大功能。',
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'iMac',
          image: 'https://picsum.photos/id/0/300/300',
          description: 'iMac 背後的理念，始終如一，從未動搖，那就是將強大易用的技術，融入優雅的一體成型設計，讓桌上型電腦的使用體驗不斷革新。',
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Products', null, {})
  }
}
