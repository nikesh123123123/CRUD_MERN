import express from "express"
import {create, deleteuser, getAllUsers, getUsersById, update} from "../controller/usercontroller.js"
const route = express.Router();
route.post("/user",create);
route.get("/users",getAllUsers);
route.get("/user/:id",getUsersById);
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteuser);
export default route;