'use strict'

const { Company, User, Sequelize } = require('../models')
const axios = require('axios')
// const sanbox = require('../sanbox')
// console.log(sanbox)
class controllerAdmin {
    static home(req, res) {
        Company
            .findAll()
            .then(data => {
                res.render('companyLists', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
    
    static addForm(req, res) {
        res.render('')
    }
    static addData(req, res) {
        let obj = {

        }
    }
    static editForm(req, res) { }
    static editData(req, res) { }
    static deleteData(req, res) { }
}

module.exports = controllerAdmin