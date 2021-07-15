require('dotenv').config()

const server = {
  port: process.env.SERVER_PORT || 3000,
  host: process.env.SERVER_HOST || 'localhost'
}

module.exports = {
  server
}
