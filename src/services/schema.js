import pkg from "mongoose";
const { model, Schema }= pkg

const commentSchema = new Schema({
        comment:{type:String , required:true},
        rate:{type:Number,required:true},
        elementId: { type:String}
})
export default model('comment',commentSchema)