import express from "express";
import examinerRoutes from "../routes/examiner.route.mjs";
import departmentRoutes from "../routes/department.route.mjs";

const router = express.Router();

router.use("/examiner", examinerRoutes);
router.use("/department", departmentRoutes);

export default router;
