
import express from "express";

import { userLogin, userSignup ,  } from "../controller/usercontoller.js";
import { getProductById, getproducts } from "../controller/productController.js";




 


const router = express.Router();

router.post('/' , userSignup);

router.post('/signup', userSignup);
  
router.post('/login', userLogin); //(req , res)=>{
     //console.log(req.body);
     //res.json({message: "succesfully login"});
//});
router.get('/products', getproducts);
router.get('/product/:id', getProductById);//async (request , response) =>{
    
          //try{
             //const id = request.params.id;
    
             //const product  = await product.findOne({'id': id})
    
             //response.status(200).json(product);
          //}catch(error){
           // response.status(500).json({message: error.message})
    
          
        //}}
//router.post('/payment', addPaymentGatway);





export default router;

