'use strict'

const {User, Company, Sequelize} = require('../models')
const Op = Sequelize.Op
const bcrypt = require('bcryptjs');

class controllerIndex {

    static home(req, res) {
        res.render('login', { data: null, msg: null })
    }

    static login(req, res) {
        const obj = {
            password : req.body.password,
            username : req.body.username
        }
        const options = {
            where: {
                [Op.or]: [ { user_name:obj.username }],
                [Op.and]: { password: obj.password }
            },
            hooks: true
        }
        console.log(req.session)
        User
            .findOne(options)
            .then(data => {
                req.session.user = {
                    id : data.dataValues.id,
                    role: data.dataValues.role,
                    isLoggedIn: true
                }
                if (data) {
                    switch (data.dataValues.role) {
                        case 'client':
                            res.render(``, { data })
                            break
                        case 'admin':
                            res.redirect(`/${data.dataValues.role}`)
                            break
                    }
                } else {
                    res.render('login', { data: null, msg: 'Incorrect username / password' })
                }
            })
            .catch(err=>{
                console.log('masuk sini')
                console.log(err)
                res.send(err)
            })
    }

    static registerPage(req, res) {
        res.render('register', { error: null, value: null, msg : null })
    }

    static register(req, res) {
        const value = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            RoleId: 3
        }
        User
            .create(value)
            .then(user => {
                res.render('index', { data: null, msg: null })
            })
            .catch(err => {
                const error = IndexController.createError(err.errors)
                res.render('register', { value, error, msg: null })
            })
    }

    static createError(err) {
        let temp = {}
        err.forEach(element => {
            if (!temp[element.path]) {
                temp[element.path] = [element.message]
            } else {
                temp[element.path].push(element.message)
            }
        });
        return temp
    }

}

module.exports = controllerIndex