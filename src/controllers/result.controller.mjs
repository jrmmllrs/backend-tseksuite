import { Result } from "../models/index.model.mjs";

export const getAllResult = async (req, res) => {
  try {
    const results = await Result.findAll();

    if (!results) {
      return res.status(400).json({ message: "There are no results" });
    }

    res
      .status(200)
      .json({ message: "Results retrieved successfully", data: results });
  } catch (error) {
    console.error("Error retrieving result:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createResult = async (req, res) => {
  try {
    const { examiner_id, quiz_id, score, status } = req.body;

    const result = await Result.create({
      examiner_id,
      quiz_id,
      score,
      status,
      created_at: new Date(),
    });

    res
      .status(201)
      .json({ message: "Result created successfully", data: result });
  } catch (error) {
    console.error("Error creating result:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteResult = async (req, res) => {
  try {
    const { result_id } = req.params;

    const deletedResult = await Result.destroy({
      where: { result_id },
    });

    res
      .status(201)
      .json({ message: "Result deleted successfully", data: deletedResult });
  } catch (error) {
    console.error("Error deleting result:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
