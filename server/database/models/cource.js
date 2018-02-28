const Sequelize = require('sequelize');
const theme = require('./theme');
const db = require('../connection_manager');

const Cource = db.define('cources', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        name: {
        type: Sequelize.STRING
        },
        // themesId: {
        // type: Sequelize.INTEGER,
        // field: 'themes_id'
        // }, 
    }, {
        underscored: true
    });

Cource.belongsTo(theme, { as: 'theme', foreignKey: 'themes_id' });

// Cource.sync({force: false}).then(() => {
//     // Table created
//     return Cource.create({
//         id: 1,
//         name: 'firs'
//     });
//     });    
  
module.exports = Cource;