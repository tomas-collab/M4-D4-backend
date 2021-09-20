import commentModel from './schema.js'
import express from 'express'


const commentRouter = express.Router()

commentRouter.route('/')
.get(async(req,res,next)=>{
    try {
        const comment = await commentModel.find()
        res.send(comment)
    } catch (error) {
        next(error)
    }
})
.post(async(req,res,next)=>{
    try {
        const newComments = new commentModel(req.body)
        const comments = await newComments.save()
        res.send(comments)
    } catch (error) {
        next(error)
    }
})
commentRouter.route('/:id')
.get(async(req,res,next)=>{
    try {
        const commentId = await commentModel.findOne({elementId:req.params.id})
        res.send(commentId)
    } catch (error) {
        next(error)
    }
}).delete(async(req,res,next)=>{
    try {
        const commentId = req.params.id
        const deletedComment = await commentModel.findOneAndDelete(commentId)
        if(deletedComment){
            res.send('deleted')
        }else{
            console.log('not deleted')
        }
    } catch (error) {
      next(error)  
    }
})
export default commentRouter