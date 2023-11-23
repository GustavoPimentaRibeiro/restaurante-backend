const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud_db', 'root', 'crud_db', {dialect: 'mysql', host: 'mysql'});
const request = require('supertest');
const app = require('../app.js');
const { users } = require('../models/users');

beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
});

describe("Crud Controler Tests", () =>{

    it("Deve retornar 400 se parâmetros inválidos", async() => {
        let response = await request(app).post('/create').send({});
        expect(response.statusCode).toBe(400);
    
        response = await request(app).post('/update').send({}); 
        expect(response.statusCode).toBe(400);

        response = await request(app).post('/delete').send({}); 
        expect(response.statusCode).toBe(400);

        response = await request(app).get('/read'); 
        expect(response.statusCode).toBe(400);
    });


    // CREATE
    it("Deve retornar 200 com os parâmetros válidos para create", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'create').mockImplementation(() => new Promise((resolve) => resolve({
            create: true
        })))

        let response_expected = {
            success: true, 
            statusCode: 200,
            result: {
                create: true
            }
        }

        let response = await request(app).post('/create').send({"name": "teste", "email": "teste@mail.com"})
        expect(response.body).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

    
    it("Deve retornar 400 se sequelize falhou na criação", async()=>{

        jest.spyOn(users, 'create').mockImplementation(()=> new Promise((resolve, reject) => reject(new Error('code 400'))))
        let response = await request(app).post('/create').send({"name": "teste", "email": "teste@mail.com"})
        expect(response.statusCode).toBe(400);
    });


    // UPDATE
    it("Deve retornar 200 com os parâmetros válidos para update", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'update').mockImplementation(()=> new Promise((resolve) => resolve([1])))

        let response_expected = {
            result: 'Update successfuly'
        }

        let response = await request(app).post('/update').send({"name": "teste", "email": "teste@mail.com"})
        expect(response.body).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

    it("Deve retornar 404 se sequelize falhou no update", async()=>{

        jest.spyOn(users, 'update').mockImplementation(()=> new Promise((resolve) => resolve([0])))
        let response = await request(app).post('/update').send({"name": "teste", "email": "teste@mail.com"})
        console.log("AQUI", response.body)
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({error: 'User not found'})
    });


    // DELETE
    it("Deve retornar 200 com os parâmetros válidos para delete", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'destroy').mockImplementation(()=> new Promise((resolve) => resolve({
            deleted: true
        })))

        let response_expected = {
            result: 'User deleted!'
        }

        let response = await request(app).post('/delete').send({"email": "teste@mail.com"})
        expect(response.body).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

    it("Deve retornar 404 se sequelize falhou no delete", async()=>{

        jest.spyOn(users, 'destroy').mockImplementation(()=> new Promise((resolve) => resolve(0)))
        let response = await request(app).post('/delete').send({"name": "teste", "email": "teste@mail.com"})
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({
            error: 'User not found'
        })
    });


    // READ
    it("Deve retornar 200 com os parâmetros válidos para read", async()=>{
        jest.mock('../database/config.js');
        jest.spyOn(users, 'findOne').mockImplementation(()=> new Promise((resolve) => resolve({
            result: true
        })))

        let response_expected = {
            result:true
        }

        let response = await request(app).get('/read?email=teste@mail.com');
        console.log("AQUI", response.body)
        expect(response.body.result).toEqual(response_expected);
        expect(response.statusCode).toBe(200);
    })

    it("Deve retornar 404 se sequelize falhou no read", async()=>{

        jest.spyOn(users, 'findOne').mockImplementation(()=> new Promise((resolve) => resolve(null)))
        let response = await request(app).get('/read?email=teste@mail.com')
        expect(response.body).toEqual({
            error: 'User not found!'
        });
        expect(response.statusCode).toBe(404);
    });

});