'use strict'

const { User, Company, Stock } = require('../models')
const axios = require('axios')
class ControllerUser {
    static home(req, res) {
        let id = Number(req.params.id)
        User
        .findAll({
                include: [{
                    model: Company
                }],
                where: { id: id }
            }
        )
            .then(data => {
                res.render('userPage', { dataPortofolio: data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static userPage(req, res) {
        let id = Number(req.params.id)
        Company.findAll()
            .then(data => {
                res.render('companyLists', { data, id: id })
            })
            .catch(err => {
                console.log(err)
            })
    }
    static sell(req, res) { }

    static buyData(req, res) {
        let obj = { 
            name: req.body.name, 
            price: req.body.price, 
            changes: req.body.changes 
        }
        Company.create(obj)
            .then(data => {
                res.redirect('/user')
            })
            .catch(err => {
                console.log(err)
            })
    }

    static refresh(req, res) {
        Company
            .destroy({
                where: {}
            })
            .then(() => {
                console.log('asd')
                const options = {
                    url: 'https://financialmodelingprep.com/api/v3/stock/actives',
                    method: 'GET'
                }
                return axios(options)
            })
            .then(response => {
                let id = Number(req.params.id)
                const data = response.data.mostActiveStock
                data.forEach((el, index) => {
                    el.id = index + 1
                });
                Company
                    .bulkCreate(data)
                    .then(result => {
                        res.redirect(`/user/${id}/companyLists`)
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static editData(req, res) {
        let id = Number(req.params.id)
        let obj = {
            name: req.body.name,
            user_name: req.body.user_name,
            password: req.body.password,
            email: req.body.email
        }
        console.log(id)
        User
            .update(obj, {
                where: {
                    id: id
                }
            })
            .then(data => {
                console.log(id)
                res.redirect(`/user/${id}`)
                // res.send(data)
            })
    }
}
module.exports = ControllerUser