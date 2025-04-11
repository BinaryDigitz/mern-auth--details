import { userFail, userSuccess } from "../config/returnMessage.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js";
import UserModel from "../models/user.model.js";

// GET ALL USERS: /api/users/
export const getUsers = asyncMiddleware ( async (req, res ) =>{
    const users = await UserModel.find({}).select('-password')
    res.json(userSuccess('All users', 200, users))
    
})
// GET USER: /api/users/:userId
export const getUser = asyncMiddleware ( async (req, res ) =>{
    const { userId } = req.params
    if(!userId) return res.json( userFail('Please provide userId'))
    const user = await UserModel.findById(userId).select('-password')

    if(!user) return res.json(userFail('Invalid userId', 404))

    res.json(userSuccess('Fetch user successfully', 200, user))

})
// CREATE USER: /api/users/
export const createUser = asyncMiddleware ( async (req, res ) =>{

})
// UPDATE USER: /api/users/:userId
export const updateUser = asyncMiddleware ( async (req, res ) =>{

})
// DELETE USER: /api/users/:userId
export const deleteUser = asyncMiddleware ( async (req, res ) =>{

})