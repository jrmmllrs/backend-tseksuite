import express from "express";
import {
  getAllExaminer,
  //deleteExaminer,
} from "../controllers/examiner.controller.mjs";

const router = express.Router();

router.get("/get", getAllExaminer);
// router.delete("/delete/:examiner_id", deleteExaminer);

export default router;
