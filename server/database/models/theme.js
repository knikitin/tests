const Sequelize = require('sequelize');
const db = require('../connection_manager');

const Theme = db.define('themes', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    parentId: {
      type: Sequelize.INTEGER,
      field: 'parent_id'
    },
  }, {
    underscored: true
  });
  
    // Theme.sync({force: false}).then(() => {
    // // Table created
    // return Theme.create({
    //     name: 'second'
    // });
    // });    

module.exports = Theme;