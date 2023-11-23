//create table comments if does not exists
(async () => {
    const {users} = require('../models/users');
 
    try {
        const resultado = await users.sync();
        console.log("Table created with success!");
    } catch (error) {
        console.log(error);
    }
})();