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
                // console.log(obj.password)
                // console.log('asd')
                if(bcrypt.compareSync(obj.password,data.password)){
                    req.session.user = {
                        id: data.dataValues.id,
                        role: data.dataValues.role,
                        isLoggedIn: true
                    }
                    if (req.session.user.role === 'User') {
                        res.redirect(`/user/${Number(data.dataValues.id)}`)
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

}

module.exports = controllerIndex