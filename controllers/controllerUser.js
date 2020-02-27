'use strict'

const {User} = require('../models')

class controllerUser {
    static home(req,res) {
        User.findAll()
        .then(data=>{
            res.render('userPage', {dataPortofolio : data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    static buy(req,res) {}
    static addForm(req,res) {}
    static addData(req,res) {}
}
module.exports = controllerUser