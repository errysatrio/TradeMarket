'use strict'

const { Company, User, Sequelize, Stock } = require('../models')

class controllerAdmin {
    static home(req, res) {
        User
            .findAll()
            .then(data => {
                res.render('userLists', { data ,individualHooks:true})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteData(req, res) {
        let id = Number(req.params.id)
        Promise.all([User.destroy({where:{id:id}}),Stock.destroy({where:{UserId:id}})])
        .then(data=>{
            // return Stock.destroy(where)
            res.redirect('/admin')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = controllerAdmin