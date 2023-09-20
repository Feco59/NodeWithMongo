import express from "express";
import cors from "cors";
import UserController from "../Controllers/UserController";


const apiRouter = express.Router();

apiRouter.use(cors());
apiRouter.use(express.json());

apiRouter.get('/api/user',UserController.getAllUsers);
apiRouter.get('/api/user/:id',UserController.getUser);
apiRouter.post('/api/user/:id',UserController.addUser);
apiRouter.delete('/api/user',UserController.removeUser);

export default apiRouter;