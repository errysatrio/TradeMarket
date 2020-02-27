'use strict'

const {} = require('../models')

class controllerAdmin {
    static home(req,res){
        Model
        .destroy({
            where: {}
        })
        .then(() => {
            const value = {
                hostname: 'financialmodelingprep.com',
                port: 443,
                path: '/api/v3/stock/actives',
                method: 'GET'
            }
            const request = https.request(value, (result) => {
                result.on('data', (d) => {
                    const datas = JSON.parse(d.toString('utf8')).mostActiveStock
                    datas.forEach((data, index) => {
                        data.id = index + 1
                    });
                    Model
                        .bulkCreate(datas)
                        .then(data => {
                            res.render('admin', { companies: data })
                        })
                        .catch(err => res.send(err))
                })
            })
            request.on('error', (error) => {
                console.error(error)
            })

            request.end()
        })
        .catch(err => {
            res.send(err)
        })
    }
    static addForm(req,res){
        res.render('')
    }
    static addData(req,res){
        let obj = {
            
        }
    }
    static editForm(req,res){}
    static editData(req,res){}
    static deleteData(req,res){}
}

module.exports = controllerAdmin