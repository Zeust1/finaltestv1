import teachersModel from "../Models/teachersModel.js";

const teachersControllers = {
    getTeachers: async (req, res, next) => {
        try {
            const listTeachers = await teachersModel.findById('670f30f56d7976234bcdf41d').populate('userId', 'name address')

            res.status(200).send({
                succes: 'succesfully',
                data: {
                    listTeachers
                }
            })
        } catch (error) {
            res.status(403).send('Forbiden')
        }
    }
}

export default teachersControllers