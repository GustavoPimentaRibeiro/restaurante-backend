const { users } = require('../models/users');

class CrudController{
    async createUser(req, res) {
        try {
            const params = req.body;

            if (!params.name || !params.email) {
                return res.status(400).json({ error: 'Invalid params' });
            }

            await users.create(params).then((result) => { //resolve   
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    result
                })
            }).catch((error) => { //reject
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    error
                })
            });

        } catch(e) {
            return res.status(500).json({ error: e });
        }
    }

    async updateUser(req, res) {
        try {
            const params = req.body;

            if (!params.name || !params.email) {
                return res.status(400).json({ error: 'Invalid params' })
            }

            const result = await users.update(params, {
                where:{ email: params.email }
            })

            if (result[0] == 1) {
                return res.status(200).json({ result: 'Update successfuly' })
            }

            return res.status(404).json({ error: 'User not found' })
        } catch(e) {
            return res.status(500).json({ error: e })
        }
    }

    async readUser(req, res) {
        try {
            const params = req.query;

            if (!params.email) {
                return res.status(400).json({ error: 'Invalid params' })
            }

            const result = await users.findOne({ where: { email: params.email } })

            if (!result || result == null) {
                return res.status(404).json({ error: 'User not found!' })
            }

            return res.status(200).json({ result })
        } catch(e) {
            return res.status(500).json({ error: e })
        }
    }

    async deleteUser(req, res){
        try{
            const params = req.body;

            if (!params.email){
                return res.status(400).json({ error: 'Invalid params' })
            }

            const result = await users.destroy({
                where:{
                    email: params.email
                }
            })

            if (result == 0){
                return res.status(404).json({ error: 'User not found' })
            }
            return res.status(200).json({ result: 'User deleted!' })

        } catch(e) {
            return res.status(500).json({ error: e })
        }
    }
}

module.exports = CrudController;