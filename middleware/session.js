'use strict'

function checkRole(req, res, next) {
    console.log(req.session)
    if (req.session.user.role === 'Admin') {
        console.log('l')
        next()
    } else {
        console.log('123')
        // req.session.destroy((err)=>{
            res.redirect(`/`)
        // })
    }
}

module.exports = checkRole