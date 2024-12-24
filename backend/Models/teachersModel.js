import mongoose from "mongoose"
import { Schema } from "mongoose"


const teachersSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    code: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    teacherPositionsId: { type: Schema.Types.ObjectId, ref: 'teacherpositions'},
    degrees: [{
        type: {
          type: String,
          school: String,
          major: String,
          year: Number,
          isGraduated: Boolean,
        },
      }],
  }, { timestamps: true });

const teachersModel = mongoose.model('teachers', teachersSchema)

export default teachersModel