module.exports = function(userType) {
    return function(req, res, next){
        if (req.session.userType===userType) {
            next();
        }
        else {
            //console.log("auth for " + userType + " failed");
            next('route');
        }
    }
}
