import { Sequelize} from 'sequelize';


const db = new Sequelize('api', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'

});

export default db;