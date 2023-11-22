const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://tp_postgresql_cloud_user:DR2BlMHIjMhE7JwYUjxT6UaSdu72JPVx@dpg-clf1cq415k1s73f7cdh0-a/tp_postgresql_cloudpostgres://tp_postgresql_cloud_user:DR2BlMHIjMhE7JwYUjxT6UaSdu72JPVx@dpg-clf1cq415k1s73f7cdh0-a/tp_postgresql_cloud', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
