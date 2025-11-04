import express from "express";
import {
  createExaminer,
  deleteExaminer,
  getAllExaminer,
  udpateExaminer,
} from "../controllers/examiner.controller.mjs";

const router = express.Router();

router.get("/get", getAllExaminer);
router.post("/create", createExaminer);
router.delete("/delete/:examiner_id", deleteExaminer);
router.put("/update/:examiner_id", udpateExaminer);

export default router;
