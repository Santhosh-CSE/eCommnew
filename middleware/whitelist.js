const jwt_decode = require("jwt-decode");
var whitelistArray = new Array();
whitelistArray[0]="superuser@gmail.com";
whitelistArray[1]="superuser1@gmail.com";
whitelistArray[2]="superuser2@gmail.com";
//const superuser="superuser@gmail.com";
const whitelist = (req, res, next) => {
const token = req.headers.authorization.split(" ")[1];
var decoded = jwt_decode(token);
const JWT_email = decoded.email;
let flag=0;
//const checkuser = await schema.findById(decoded.id)
for (var i = 0; i < whitelistArray.length ; i++)
{
if(JWT_email === whitelistArray[i])
flag=1;
}
if(flag===1)
{
console.log(JWT_email);
console.log("message in whitelist :Success");
next();
}
else
{
console.log("error in whitelist");
return res.status(403).json({
message: 'Auth failed'
})
}
}
module.exports= whitelist;