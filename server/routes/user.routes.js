import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/user.controllers.js";
import authrize from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.get('/:userId',authrize, getUser)

userRouter.post('/', createUser)

userRouter.put('/:userId', updateUser)

userRouter.delete('/:userId', deleteUser)


export default userRouter