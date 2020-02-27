'use strict'

const { User, Company, Sequelize } = require('../models')
const Op = Sequelize.Op
const bcrypt = require('bcryptjs');

class controllerIndex {

    static home(req, res) {
        res.render('login', { data: null, msg: null })
    }
    static registerForm(req, res) {
        res.render('register')
    }

    static registerData(req, res) {
        let obj = {
            nama: req.body.nama,
            user_name: req.body.user_name,
            password: req.body.password,
            role: 'User',
            email: req.body.email
        }
        User
            .create(obj)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static login(req, res) {
        const obj = {
            password: req.body.password,
            username: req.body.username
        }
        const options = {
            where: {
                [Op.or]: [{ email: obj.username }, { user_name: obj.username }]
            },
            hooks: true
        }
        User
            .findOne(options)
            .then(data => {
                if(bcrypt.compareSync(obj.password,data.password)){
                    req.session.user = {
                        id: data.dataValues.id,
                        role: data.dataValues.role,
                        isLoggedIn: true
                    }
                    if (req.session.user.role === 'User') {
                        res.redirect(`/${data.dataValues.role.toLowerCase()}/${Number(data.dataValues.id)}`)
                    } else {
                        res.redirect('/admin')
                    }
                } else {
                    res.render('login')
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
    static registerPage(req, res) {
        res.render('register', { error: null, value: null, msg: null })
    }
    static register(req, res) {
        const value = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
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