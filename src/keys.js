//dir de la db
module.exports = {

    database: {
      
        connectionLimit: 1000,
        host: process.env.DB_HOST || '3.144.3.122',//'152.70.216.169',//'localhost', //'',
        port:  process.env.DB_PORT || '3306',
        user:  process.env.DB_USER || 'useremote',//'harold151199',//'harold',
        password: process.env.DB_PASSWORD || 'user$123R!',//'151199',
        database: process.env.DB_NAME || 'sw1pizarraC4'
        // connectionLimit: 100,
        // host: 'localhost',//'152.70.216.169',//'localhost', //'',
        // port: '3307',
        // user: 'root',//'harold151199',//'harold',
        // password: '1234',//'151199',
        // database: 'sw1pizarrac4'
    }
}