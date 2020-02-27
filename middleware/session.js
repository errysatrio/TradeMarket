'use strict'

function checkRole(req, res, next) {
    if (req.session.user.role === 'Admin') {
        next()
    } else {
        res.redirect(`/`)
    }
}

module.exports = checkRole