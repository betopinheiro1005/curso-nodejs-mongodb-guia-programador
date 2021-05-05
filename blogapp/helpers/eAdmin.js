
module.exports = {

    eAdmin: function(req, res, next){
        if(req.isAuthenticated()){
            if(req.user.eAdmin == 1) {
                return next()
            } else {
                req.flash("error_msg", "Você não tem permissão para realizar essa operação!")
                res.redirect("/")
            }
        } else {
            req.flash("error_msg", "Você não tem permissão para realizar essa operação!")
            res.redirect("/usuarios/login")
        }
    }
}
