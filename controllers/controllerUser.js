'use strict'

const { User, Company, Stock } = require('../models')

class ControllerUser {
    static home(req, res) {
        
        let id = Number(req.params.id)
        // console.log(id, `-----------------------------------------------------------------------`)
        User.findAll(
                {
                include: [{
                    model:Company 
                }],
                where: { id: id }
            })
            .then(data => {
                res.render('userPage', { dataPortofolio: data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static buy(req, res) {
        Company.findAll()
            .then(data => {
                res.render('stock', { dataCompany: data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    static addForm(req, res) {

    }
    static addData(req, res) {
        Company.create({ name: req.body.name, price: req.body.price, changes: req.body.changes })
            .then(data => {
                res.redirect('./user')
            })
            .catch(err => {
                console.log(err)
            })
    }
}
module.exports = ControllerUser