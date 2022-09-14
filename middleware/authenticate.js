const jwt_decode = require("jwt-decode");
const Userfetch = require('../models/DB/User');
const Cartfetch = require('../models/DB/cartschema');

const cartMatch = async (req, res, next) => {
    //console.log("matchUser", req.params);
    const matchUser1 = await Userfetch.findOne({
        _id: req.params._id
    });
    console.log("matchUser1", matchUser1);
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt_decode(token);
    const JWT_email = decoded.email;
    const Id = _i
    console.log("JWT_usersId", JWT_usersId);
    
        if(JWT_email === cartMatch.Id) {
            console.log("Success");
            next();
            
        } 
    else { 
        //console.log("error", error);
        return res.status(403).json({
            message: 'Incorrect'
        })
    } 
}


module.exports = cartMatch;