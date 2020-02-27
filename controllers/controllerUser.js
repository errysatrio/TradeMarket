'use strict'

const { User, Company } = require('../models')

class ControllerUser {
    static home(req, res) {
        Company.findAll()
            .then(data => {
                res.render('userPage', { dataPortofolio: data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    static buy(req, res) {
        res.redirect('./companyLists')
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