const express= require('express');
const router = express.Router();
const schemaCart = require('../models/DB/cartschema');
//const cartMatch = require('../middleware/authenticate')

//POSTING into Cart
router.post('/', async (req,res) =>
{
const postdata = new schemaCart({
productid: req.body.productid
})
try{
console.log(req.body.productid[0])
const a1 = await postdata.save()
//const message="product is added"
res.json({message:"product is added to cart"});
}catch(err){
res.send(`error:${err}`)
}
})

//GET the Cart
router.get('/', async(req,res) => {
try{
const data=await schemaCart.find()
res.json(data)
}catch(err){
res.send('Error ' + err)
}
})


//UPDATE the Cart
router.put('/:id',async(req,res)=>
{
let id=req.params.id;
try{
console.log(req.body.productid[0])
const cartdata=await schemaCart.findByIdAndUpdate(id)
cartdata.productid[0]=req.body.productid[0];
cartdata.productid[1]=req.body.productid[1];
cartdata.productid[2]=req.body.productid[2];
const putdata=cartdata.save()
res.json({message:"cart updated succesully"})
}
catch(err){
res.send('Error ' + err)
console.log(err)
}
})

module.exports=router;