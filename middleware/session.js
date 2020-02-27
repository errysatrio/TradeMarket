'use strict'

function checkStatus(req, res, next) {
    if (req.session.user.isLoggedIn === true) {
        next()
    } else {
        res.redirect(`/`)
    }
}

module.exports = checkStatus