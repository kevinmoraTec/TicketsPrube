const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Protecto Tickets')
})


module.exports=router;