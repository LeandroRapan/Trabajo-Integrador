export const errorHandler =(eror, req, res , next)=>{
    console.log(`error ${error.message}`)
    const status =error.status || 400
    res.status(status).send(error.message)
}