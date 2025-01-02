import fs from "fs";
import servicemodel from "../models/servicemodel.js";

class serviceController {
  static addNewServices = async (req, res) => {
    const { title, description } = req.body;
    const { filename } = req.file;
    try {
      if (!title || !description) {
        if (filename) {
          fs.unlink(`public/service/${filename}`, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
        return res
          .status(400)
          .json({ success: false, message: "All Fields Required" });
      }

      if (!filename) {
        return res
          .status(400)
          .json({
            success: false,
            message: "Image Required, Please Upload Image Less Than 1MB",
          });
      }

      const saveservice = await servicemodel.create({
        title,
        description,
        serviceImage: filename,
      });
      if (!saveservice) {
        return res
          .status(400)
          .json({ success: false, message: "Error Creating Service " });
      }

      return res
        .status(200)
        .json({ success: true, message: "Service Created SuccessFully" });
    } catch (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error Please Try Again",
        });
    }
  };
  static getAllServices = async (req, res) => {
    try {
      const findservice = await servicemodel.find().sort({ createdAt: -1 });
      if (!findservice) {
        return res
          .status(400)
          .json({ success: false, message: "There are No Services Uploaded" });
      }
      return res.status(200).json({ success: true, data: findservice });
    } catch (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error Please Try Again",
        });
    }
  };
  static getSingleService = async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ success: false, message: "Id Required" });
      }
      const findservice = await servicemodel.findById(id);
      if (!findservice) {
        return res
          .status(400)
          .json({ success: false, message: "No Such Service Available" });
      }
      return res.status(200).json({ success: true, data: findservice });
    } catch (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error Please Try Again",
        });
    }
  };
  static updateService = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    const { filename } = req.file;
    try {
      if (!id) {
        return res.status(400).json({ success: false, message: "Id Required" });
      }
      const findservice = await servicemodel.findById(id);
      if (!findservice) {
        if (filename) {
          fs.unlink(`public/service/${filename}`, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
        return res
          .status(400)
          .json({ success: false, message: "No Such Service Available" });
      }
      if (filename) {
        fs.unlink(`public/service/${findservice.serviceImage}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      const saveservice = await servicemodel.findByIdAndUpdate(id, {
        title,
        description,
        serviceImage: filename,
      });
      if (!saveservice) {
        return res
          .status(400)
          .json({ success: false, message: "Error Updating Service" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Service Updated Successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error Please Try Again",
        });
    }
  };
  static deleteService = async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ success: false, message: "Id Required" });
      }
      const foundservice = await servicemodel.findById(id);
      if (!foundservice) {
        return res
          .status(400)
          .json({ success: false, message: "No Such Service Available" });
      }
      fs.unlink(`public/service/${foundservice.serviceImage}`, (err) => {
        if (err) {
          console.log(err);
        }
      });

      const findservice = await servicemodel.findByIdAndDelete(id);
      if (!findservice) {
        return res
          .status(400)
          .json({ success: false, message: "Error Deleting Service" });
      }

      return res
        .status(200)
        .json({ success: true, message: "Service Deleted Successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error Please Try Again",
        });
    }
  };
}

export default serviceController;
