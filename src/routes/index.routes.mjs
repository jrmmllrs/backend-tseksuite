import express from "express";
import examinerRoutes from "../routes/examiner.route.mjs";
import departmentRoutes from "../routes/department.route.mjs";
import quizRoutes from "../routes/quiz.route.mjs";
import questionRoutes from "../routes/question_bank.route.mjs";

const router = express.Router();

router.use("/examiner", examinerRoutes);
router.use("/department", departmentRoutes);
router.use("/quiz", quizRoutes);
router.use("/question", questionRoutes);

export default router;
