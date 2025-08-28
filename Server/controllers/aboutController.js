import fs from "fs";
import aboutmodal from "../models/aboutusmodel.js";

class aboutController {
  static addAboutUs = async (req, res) => {
    const { title, content } = req.body;
    const filename = req.file?.filename;
    try {
      if (!filename) {
        return res.status(400).json({
          success: false,
          message: "Please Upload Image Less Than 1MB",
        });
      }
      if (!title || !content) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/about/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "All Field Required" });
      }

      const findabout = await aboutmodal.find();
      if (findabout.length > 0) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/about/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "About US Already Exist" });
      }

      const saveabout = await aboutmodal.create({
        title,
        content,
        aboutImage: filename,
      });

      if (!saveabout) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/about/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "Error Creating About Us" });
      }
      return res
        .status(200)
        .json({ success: true, message: "About Us Created SuccessFully" });
    } catch (error) {
      if (filename) {
        try {
          await fs.promises.unlink(`public/about/${filename}`);
        } catch (error) {
          console.log(error);
        }
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getAboutUs = async (req, res) => {
    try {
      const findabout = await aboutmodal.find().lean();
      if (findabout.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "About Us Does Not Exist" });
      }
      return res.status(200).json({ success: true, data: findabout });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static updateAboutUs = async (req, res) => {
    const { title, content } = req.body;
    const filename = req.file?.filename;

    try {
      if (!filename) {
        return res.status(400).json({
          success: false,
          message: "Please Upload Image Less Than 1Mb",
        });
      }
      if (!title || !content) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/about/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "All Field Required" });
      }
      const findabout = await aboutmodal.findOne();
      if (!findabout) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/about/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "About Us Doesnt Exist" });
      }

      const saveabout = await aboutmodal.findOneAndUpdate({
        title,
        content,
        aboutImage: filename,
      });
      if (!saveabout) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/about/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }

        return res
          .status(400)
          .json({ success: false, message: "Error Updating About Us" });
      }
      try {
        await fs.promises.unlink(`public/about/${findabout.aboutImage}`);
      } catch (error) {
        console.log(error);
      }
      return res
        .status(200)
        .json({ success: true, message: "About Us Updated Successfully" });
    } catch (error) {
      if (filename) {
        try {
          await fs.promises.unlink(`public/about/${filename}`);
        } catch (error) {
          console.log(error);
        }
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
}

export default aboutController;
