import { where } from "sequelize";
import { Department } from "../models/index.model.mjs";

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll({
      order: [["dept_name", "ASC"]],
    });

    if (!departments) {
      return res.status(400).json({ message: "Failed to fetch departments" });
    }

    res.status(200).json({
      message: "Departments retrieved succsessfully",
      data: departments,
    });
  } catch (error) {
    console.error("Error fetching departments:", error);
  }
};

export const createDepartment = async (req, res) => {
  try {
    const { dept_name, is_active } = req.body;

    if (!dept_name || !is_active) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const department = await Department.create({
      dept_name,
      is_active,
    });

    res.status(201).json({
      message: "Examiner created successfully",
      data: department,
    });
  } catch (error) {
    console.error("Failed to create department:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateDepartment = async (req, res) => {
  try {
    const { dept_id } = req.params;
    const { dept_name } = req.body;

    if (!dept_id) {
      return res.status(400).json({ messgae: "Department Id is required" });
    }

    if (!dept_name) {
      return res.status(400).json({ message: "Department name is required" });
    }

    const department = await Department.findByPk(dept_id);

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    department.dept_name = dept_name;
    await department.save();

    res.status(201).json({
      message: "Department updated successfully",
      data: department,
    });
  } catch (error) {
    console.error("Error updating department:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    const { dept_id } = req.params;

    if (!dept_id) {
      return res.status(400).json({ message: "Department Id is required" });
    }

    const deletedDepartment = await Department.destroy({
      where: { dept_id },
    });

    if (dept_id === 0) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.status(201).json({
      message: "Department deleted successfully",
      data: deletedDepartment,
    });
  } catch (error) {
    console.error("Failed to delete department:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
