import {
    allMsgService,
    getMsgByIdService,
    updateMsgService,
    deleteOneService,
    deleteAllService
} from '../services/messages.services.js'

export const allMsgController = async (req, res, next) =>{
    try {
        const msgs = await allMsgService()
        res.json(msgs)
    } catch (error) {
        next(error)
    }
}
export const createMsgController = async (req, res, next) =>{
    try {
        const {msg} = req.body
        const msgNew = await createMsgController(msg)
        res.json(msgNew)
    } catch (error) {
        next(error)
    }
}
export const msgByIdController  = async (req, res, next) =>{
    try {
        const { id }= req.params;
        const msg = await getMsgByIdService(id)
        res.json(msg)
    } catch (error) {
        next(error)
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
        next(error)
    }
}
export const deleteOneController = async (req, res, next) =>{
    try {
        const {id}= req.params;
        const delOne = await deleteOneService ()
        res.json(delOne)
    } catch (error) {
        next(error)
    }
}
export const deleteAllController = async (req, res, next) =>{
    try {
        const  del= await deleteAllService()
        res.json(del)
    } catch (error) {
        next(error)
    }
}