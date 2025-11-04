import express from "express";
import {
  getAllDepartments,
  createDepartment,
  deleteDepartment,
  updateDepartment,
} from "../controllers/department.controller.mjs";

const router = express.Router();

router.get("/get", getAllDepartments);
router.post("/create", createDepartment);
router.delete("/delete/:dept_id", deleteDepartment);
router.put("/update/:dept_id", updateDepartment);

export default router;
