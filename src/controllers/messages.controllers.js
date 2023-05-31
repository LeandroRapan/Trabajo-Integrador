import {
    allMsgService,
    getMsgByIdService,
    updateMsgService,
    deleteOneService,
    deleteAllService,
    createMsgService
} from '../services/messages.services.js'

export const allMsgController = async (req, res, next) =>{
    try {
        const msgs = await allMsgService()
        
        res.json(msgs)
    } catch (error) {
        console.log(error)
    }
}
export const createMsgController = async (req, res, next) =>{
    try {
        const {message} = req.body
        const msgNew = await createMsgService(message)
        res.json(msgNew)
    } catch (error) {
        console.log(error)
    }
}
export const msgByIdController  = async (req, res, next) =>{
    try {
        const { id }= req.params;
        const msg = await getMsgByIdService(id)
        res.json(msg)
    } catch (error) {
        console.log(error)
    }
}
export const  updateMsgController= async (req, res, next) =>{
    try {
        const {id} =req.params
        const {message}= req.body
        let msg = await getMsgByIdService(id)
        const upMsg = await updateMsgService(id, message)
        res.json(upMsg)
    } catch (error) {
        console.log(error)
    }
}
export const deleteOneController = async (req, res, next) =>{
    try {
        const {id}= req.params;
        const delOne = await deleteOneService ()
        res.json(delOne)
    } catch (error) {
        console.log(error)
    }
}
export const deleteAllController = async (req, res, next) =>{
    try {
        const  del= await deleteAllService()
        res.json(del)
    } catch (error) {
        console.log(error)
    }
}