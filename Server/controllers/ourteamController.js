import fs from "fs";
import ourteammodal from "../models/ourteammodel.js";
import mongoose from "mongoose";

class ourteamController {
  static async deleteImage(filename) {
    if (!filename) {
      return;
    }
    try {
      await fs.promises.unlink(`public/ourteam/${filename}`);
    } catch (error) {
      console.log(error);
    }
  }
  static addnewteam = async (req, res) => {
    const { name, work } = req.body;
    const filename = req?.file?.filename;

    if (req.fileValidationError) {
      return res
        .status(400)
        .json({ success: false, message: req.fileValidationError });
    }

    if (!req.file || req.file.size > 1 * 1024 * 1024) {
      if (filename) {
        await ourteamController.deleteImage(filename);
      }
      return res
        .status(400)
        .json({ success: false, message: "Image Required less than 1Mb" });
    }

    if (!name || !work) {
      await ourteamController.deleteImage(filename);
      return res
        .status(400)
        .json({ success: false, message: "All Fields Required" });
    }
    try {
      const addteam = await ourteammodal.create({
        name,
        work,
        teamImage: filename,
      });
      return res
        .status(200)
        .json({ success: true, message: "Team Created Successfully" });
    } catch (error) {
      if (filename) {
        await ourteamController.deleteImage(filename);
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getallteam = async (req, res) => {
    try {
      const getallteam = await ourteammodal
        .find()
        .sort({ createdAt: -1 })
        .lean();
      if (getallteam.length < 1) {
        return res
          .status(200)
          .json({ success: false, message: "There are No Teams Data " });
      }

      return res.status(200).json({ success: true, data: getallteam });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getsingleteam = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Id No Related Record Exist",
      });
    }
    try {
      const getsingleteamprofile = await ourteammodal.findOne({ _id: id });
      if (!getsingleteamprofile) {
        return res.status(400).json({
          success: false,
          message: "No Such Team Profile is Available",
        });
      }
      return res
        .status(200)
        .json({ success: true, data: getsingleteamprofile });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static updateteam = async (req, res) => {
    const { id } = req.params;
    const { name, work } = req.body;
    const filename = req?.file?.filename;

    if (req.fileValidationError) {
      return res
        .status(400)
        .json({ success: false, message: req.fileValidationError });
    }

    if (!req.file || req.file.size > 1 * 1024 * 1024) {
      if (filename) {
        await ourteamController.deleteImage(filename);
      }
      return res
        .status(400)
        .json({ success: false, message: "Image Required Less Than 1 Mb" });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid Id " });
    }

    if (!name || !work) {
      if (filename) {
        await ourteamController.deleteImage(filename);
      }
      return res
        .status(400)
        .json({ success: false, message: "All Field Required" });
    }

    try {
      const findteam = await ourteammodal.findOne({ _id: id });
      if (!findteam) {
        if (filename) {
          await ourteamController.deleteImage(filename);
        }
        return res
          .status(400)
          .json({ success: false, message: "No Such Team Available" });
      }

      const updateteambyid = await ourteammodal.findByIdAndUpdate(
        id,
        { name, work, teamImage: filename },
        { new: true }
      );

      await ourteamController.deleteImage(findteam.teamImage);
      return res
        .status(200)
        .json({ success: true, message: "Team Updated Successfully" });
    } catch (error) {
      if (filename) {
        await ourteamController.deleteImage(filename);
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };

  static deleteteam = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Id",
      });
    }
    try {
      const deleteteam = await ourteammodal.findByIdAndDelete(id);
      if (!deleteteam) {
        return res
          .status(404)
          .json({ success: false, message: "Team not found" });
      }

      await ourteamController.deleteImage(deleteteam.teamImage);

      return res
        .status(200)
        .json({ success: true, message: "Team deleted successfully" });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
}

export default ourteamController;
