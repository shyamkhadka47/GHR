import fs from "fs";
import gallerymodal from "../models/gallerymodel.js";


class galleryController {
  static addNewGallery = async (req, res) => {
    const { description, caption } = req.body;
    const { filename } = req.file;
    if (!description || !caption) {
      if (filename) {
        fs.unlink(`public/gallery/${filename}`, (err) => {
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
      return res.status(400).json({
        success: false,
        message: "Image Required Please Upload Image less Than 1MB",
      });
    }
    try {
      const savegallery = await gallerymodal.create({
        description,
        caption,
        galleryImage: filename,
      });

      if (!savegallery) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/gallery/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res.status(400).json({
          success: false,
          message: "Error Creating Gallery Please Try Again",
        });
      }
      return res
        .status(200)
        .json({ success: true, message: "Gallery Created SuccessFully" });
    } catch (error) {
      if (filename) {
        try {
          await fs.promises.unlink(`public/gallery/${filename}`);
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

  static getAllGallery = async (req, res) => {
    try {
      const findgallery = await gallerymodal.find().sort({ createdAt: -1 });
      if (!findgallery) {
        return res.status(400).json({
          success: false,
          message: "There Are No Gallery In Database",
        });
      }
      return res.status(200).json({ success: false, data: findgallery });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };

  static getSingleGallery = async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Id Required Please Choose Valid Id",
        });
      }
      const getsinglegallery = await gallerymodal.findById(id);

      if (!getsinglegallery) {
        return res
          .status(400)
          .json({ success: false, message: "No Such Gallery Available" });
      }

      return res.status(200).json({ success: true, data: getsinglegallery });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static updateGallery = async (req, res) => {
    const { id } = req.params;
    const { description, caption } = req.body;
    const { filename } = req.file;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id Required Please Choose Valid Id",
      });
    }
    try {
      const findgallery = await gallerymodal.findById(id);

      if (!findgallery) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/gallery/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "No Such Gallery Found" });
      }
      const updategallery = await gallerymodal.findByIdAndUpdate(
        id,
        { description, caption, galleryImage: filename },
        { new: true }
      );
      if (!updategallery) {
        try {
          await fs.promises.unlink(`public/gallery/${filename}`);
        } catch (error) {
          console.log(error);
        }
        return res
          .status(400)
          .json({ success: false, message: "Error Updating Gallery" });
      }

      if (filename) {
        try {
          await fs.promises.unlink(
            `public/gallery/${findgallery.galleryImage}`
          );
        } catch (error) {
          console.log(error.message);
        }
      }

      return res
        .status(200)
        .json({ success: true, message: "Gallery updated Successfully" });
    } catch (error) {
      if (filename) {
        try {
          await fs.promises.unlink(`public/gallery/${filename}`);
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
  static deleteGallery = async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Id Required Please Choose Valid Id",
        });
      }
      const findgallery = await gallerymodal.findById(id);
      if (!findgallery) {
        return res
          .status(400)
          .json({ success: false, message: "No Such Gallery Found" });
      }

      const deletegallery = await gallerymodal.findByIdAndDelete(id);
    
      if (!deletegallery) {
        return res
          .status(400)
          .json({ success: false, message: "Error Deleting Galler" });
      }
      try {
        await fs.promises.unlink(`public/gallery/${findgallery.galleryImage}`);
      } catch (error) {
        console.log(error);
      }

      return res
        .status(200)
        .json({ success: true, message: "Gallery Deleted Successfully" });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
}

export default galleryController;
