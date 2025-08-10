import fs from "fs";
import whychooseusmodel from "../models/whychooseusmodel.js";
import mongoose from "mongoose";

class whyChooseUsController {
  static async deleteImage(arr) {
    if (arr?.length == 0) {
      return;
    }
    for (let index = 0; index < arr.length; index++) {
      try {
        await fs.promises.unlink(`public/whychooseus/${arr[index]}`);
      } catch (error) {
        console.error("Error deleting file:", arr[index], error);
      }
    }
  }
  static addwhychooseus = async (req, res) => {
    const { title, description } = req.body;

    const files = req?.files ? req?.files?.map((el) => el.filename) : [];

    if (!title || !description) {
      if (files?.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res
        .status(400)
        .json({ success: false, message: "All Fields Required" });
    }

    if (req.fileValidationError) {
      if (files && files.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res
        .status(400)
        .json({ success: false, message: req.fileValidationError });
    }

    if (files?.length == 0 || files?.length < 3) {
      if (files && files?.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res.status(400).json({
        success: false,
        message: "Please upload 3 Images And Only Images are Aceepted",
      });
    }

    try {
      const isexistwhychooseus = await whychooseusmodel.find();
      if (isexistwhychooseus?.length > 0) {
        if (files && files?.length > 0) {
          await whyChooseUsController.deleteImage(files);
        }
        return res.status(400).json({
          success: false,
          message: "Cannot Add Multiple Why Choose Us Section",
        });
      }
      const createwhychooseus = await whychooseusmodel.create({
        title,
        description,
        photos: files,
      });
      return res.status(200).json({
        success: true,
        message: "Why choose us created successfully",
        data: createwhychooseus,
      });
    } catch (error) {
      if (files?.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getwhychooseus = async (req, res) => {
    try {
      const isexistwhychooseus = await whychooseusmodel.find();
      if (isexistwhychooseus.length == 0) {
        return res.status(400).json({
          success: false,
          message: "No Why Choose Us Exists",
          data: isexistwhychooseus,
        });
      }
      return res.status(200).json({ success: true, data: isexistwhychooseus });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static updatewhychooseus = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const files = req.files ? req?.files?.map((el) => el.filename) : [];
    const filesSize = req.files ? req?.files?.map((el) => el.size) : [];

    if (!mongoose.Types.ObjectId.isValid(id)) {
      if (files.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res.status(400).json({ success: false, message: "Invalid Id" });
    }
    if (req.fileValidationError) {
      if (files.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res
        .status(400)
        .json({ success: false, message: req.fileValidationError });
    }
    if (!title || !description) {
      if (files?.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }
    if (files.length < 3) {
      if (files.length > 0) {
        await whyChooseUsController.deleteImage(files);
      }
      return res.status(400).json({
        success: false,
        message: "Please Upload 3 Image and Only Images are accepted",
      });
    }
    for (let index = 0; index < filesSize.length; index++) {
      if (filesSize[index] > 1 * 1024 * 1024) {
        if (files.length > 0) {
          await whyChooseUsController.deleteImage(files);
        }
        return res.status(400).json({
          success: false,
          message: "Please upload every image less than 1mb",
        });
      }
    }

    try {
      const findwhychooseus = await whychooseusmodel.findOne({ _id: id });
      if (!findwhychooseus) {
        if (files?.length > 0) {
          await whyChooseUsController.deleteImage(files);
        }
        return res.status(400).json({
          success: false,
          message: "No Such Why Choose Us Content Available ",
        });
      }
      const updatedwhychooseus = await whychooseusmodel.findByIdAndUpdate(
        id,
        { title, description, photos: files },
        { new: true }
      );

      await whyChooseUsController.deleteImage(findwhychooseus.photos);
      return res
        .status(200)
        .json({ success: true, message: "Why Choose Us Updated Successfully" });
    } catch (error) {
      if(files?.length > 0){
        await whyChooseUsController.deleteImage(files)
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
}

export default whyChooseUsController;
