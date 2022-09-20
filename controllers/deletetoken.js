const User = require('../models/DB/User');

userSchema.methods.deleteToken = function(token, cb)
{
    var user = this;

    user.update({$unset: {token:1}}, function(err, user){
        if(err)
        return cb(err);
        cb(null, user);
    })
}