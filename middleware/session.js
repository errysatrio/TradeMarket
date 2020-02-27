'use strict'

function checkRole(req, res, next) {
    console.log(req.session)
    if (req.session.user.role === 'Admin') {
        next()
    } else {
        req.session.destroy((err)=>{
            res.redirect(`/`)
        })
    }
}

module.exports = checkRole