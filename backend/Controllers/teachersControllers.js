import teachersModel from "../Models/teachersModel.js";

const teachersControllers = {
    getTeachers: async (req, res, next) => {
            const listTeachers = await teachersModel.find()
            res.status(200).send({
                succes: 'succesfully',
                data: listTeachers
            })

    }
}

export default teachersControllers