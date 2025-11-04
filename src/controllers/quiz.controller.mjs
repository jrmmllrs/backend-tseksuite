import { Quiz } from "../models/index.model.mjs";

export const getAllQuiz = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
