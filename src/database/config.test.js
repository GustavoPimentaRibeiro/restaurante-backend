const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud_db', 'root', 'crud_db', {dialect: 'mysql', host: 'mysql'});

describe('Config test', ()=>{

    it('Should simulate a success database connection', async()=>{
        jest.spyOn(sequelize, 'authenticate').mockImplementation(()=> new Promise((resolve) => resolve('Connection established!')));

        let response = await sequelize.authenticate();
        expect(response).toEqual('Connection established!')
    })
});