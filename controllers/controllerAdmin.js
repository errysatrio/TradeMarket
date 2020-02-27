'use strict'

const { Company, User, Sequelize, Stock } = require('../models')
const axios = require('axios')

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

    static refresh(req, res) {
        Company
            .destroy({
                where: {}
            })
            .then(() => {
                const options = {
                    url: 'https://financialmodelingprep.com/api/v3/stock/actives',
                    method: 'GET'
                }
                return axios(options)
            })
            .then(response => {
                const data = response.data.mostActiveStock
                data.forEach((el, index) => {
                    el.id = index+1
                });
                Company
                .bulkCreate(data)
                .then(result=>{
                    res.redirect('/admin')
                })
                .catch(err =>{
                    res.send(err)
                })
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