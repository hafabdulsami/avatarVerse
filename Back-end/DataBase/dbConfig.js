//var config = {
//  "user": 'sa',
//  "password": '123456789',
//  "server": 'DESKTOP-QI6H2EA',
//  "database": 'testdatabase',
//  "port": 1433, // make sure to change port
//  "dialect": "mssql",
//  encrypt: false,
//  "dialectOptions": {
//      "instanceName": "SQLEXPRESS"
//  }
//};

var config = {
  server: 'DESKTOP-QI6H2EA',
  database: 'Database',
  user: 'sa',
  password: '123456789',
  trustServerCertificate: true,
  port: 1433
};
//var config = {
//  driver: "msnodesqlv8",
//  server: "DESKTOP-QI6H2EA",
//  database: "testdatabase",
//  options: {
//    trustedConnection: true,
//    useUTC: true
//  }
//}


module.exports = config