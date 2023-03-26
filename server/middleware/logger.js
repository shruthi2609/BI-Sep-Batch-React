function logger(req,res,next){
    console.log(`logger record ${req.url} ${req.method} ${new Date().toString()}`)
    next()
}
module.exports=logger