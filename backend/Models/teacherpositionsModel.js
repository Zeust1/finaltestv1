import mongoose, { Schema } from "mongoose";

const teacherpositionsSchema = new Schema({
    name: String,
    code: String,
    des: String,
    isActive: Boolean,
    isDeleted: Boolean
})

const teacherpositionsModel = mongoose.model('teacherpositions', teacherpositionsSchema)

export default teacherpositionsModel