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
                console.log(data)
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