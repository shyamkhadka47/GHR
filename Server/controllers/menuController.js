import fs from "fs";
import mongoose from "mongoose";
import menucategorymodel from "../models/menucategorymodel.js";
import menumodel from "../models/menumodel.js";
import slugify from "slugify";
class menuController {
  // DELETE IMAGE
  static async deleteImage(filename) {
    if (!filename) {
      return;
    }
    try {
      await fs.promises.unlink(`public/menu/${filename}`);
    } catch (error) {
      console.log(error.message);
    }
  }
  static addMenu = async (req, res) => {
    const { title, description, price, menuCategory } = req.body;
    const filename = req.file?.filename;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image Required Less Than 1Mb" });
    }
    if (req.file && req.file.size > 1 * 1024 * 1024) {
      await menuController.deleteImage(filename);

      return res.status(400).json({
        success: false,
        message: "File Larger Than 1 MB",
      });
    }

    if (!title || !description || !price || !menuCategory || !filename) {
      if (filename) {
        await menuController.deleteImage(filename);
      }
      return res
        .status(400)
        .json({ success: false, message: "All Fields are Required" });
    }

    if (!mongoose.Types.ObjectId.isValid(menuCategory)) {
      await menuController.deleteImage(filename);
      return res
        .status(400)
        .json({ success: false, message: "Invalid Menu Category Id" });
    }

    try {
      const findCategory = await menucategorymodel.findById(menuCategory);
      if (!findCategory) {
        if (filename) {
          await menuController.deleteImage(filename);
        }
        return res
          .status(400)
          .json({ success: false, message: "No Such Category Exists" });
      }
      const slug = slugify(title, { lower: true, strict: true });

      // Check for existing slug
      const existingMenu = await menumodel.findOne({ slug });
      if (existingMenu) {
        await this.deleteImage(filename);
        return res.status(409).json({
          success: false,
          message: "A menu with this title already exists",
        });
      }

      const newmenu = await menumodel.create({
        title,
        slug,
        description,
        price,
        menuImage: filename,
        menuCategory,
      });

      findCategory.items.push(newmenu._id);
      await findCategory.save();
      return res
        .status(200)
        .json({ success: true, message: "Menu Created Successfully" });
    } catch (error) {
      console.log(error);
      if (filename) {
        await menuController.deleteImage(filename);
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getAllMenu = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    try {
      const totalrecords = await menumodel.countDocuments();
      const allmenu = await menumodel
        .find()
        .sort({ createdAt: -1 })
        .populate("menuCategory")
        .skip(skip)
        .limit(limit);
      return res.status(200).json({
        success: true,
        data: allmenu,
        totalrecords,
        page,
        totalpages: Math.ceil(totalrecords / limit),
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getSingleMenu = async (req, res) => {
    const { slug } = req.params;

    try {
      const singlemenu = await menumodel
        .findOne({ slug })
        .populate("menuCategory");
      if (!singlemenu) {
        return res
          .status(400)
          .json({ success: false, message: "No Such Menu Available" });
      }
      return res.status(200).json({ success: true, data: singlemenu });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static updateMenu = async (req, res) => {
    const { slug } = req.params;
    const { title, description, price, menuCategory } = req.body;
    const filename = req.file?.filename;
    if (!slug) {
      if (filename) {
        await menuController.deleteImage(filename);
      }
      return res
        .status(400)
        .json({ success: false, message: "Slug Is Required" });
    }
    if (!title || !description || !price || !menuCategory) {
      if (filename) {
        await menuController.deleteImage(filename);
      }
      return res
        .status(400)
        .json({ success: false, message: "All Fields Required" });
    }

    if (!req.file || req.file.size > 1 * 1024 * 1024) {
      await menuController.deleteImage(filename);
      return res.status(400).json({
        success: false,
        message: "Image is Required and Should be less that 1 MB",
      });
    }
    try {
      const findmenu = await menumodel.findOne({ slug });
      if (!findmenu) {
        if (filename) {
          await menuController.deleteImage(filename);
        }
        return res
          .status(400)
          .json({ success: false, message: "No Such Menu Available" });
      }

      const checkmenuCategory = await menucategorymodel.findById(menuCategory);
      const existingCategory = await menucategorymodel.findById(
        findmenu.menuCategory
      );
      if (!checkmenuCategory) {
        if (filename) {
          await menuController.deleteImage(filename);
        }
        return res
          .status(400)
          .json({ success: false, message: "Invalid Category" });
      }

      const newslug = slugify(title, { lower: true, strict: true });
      const duplicate = await menumodel.findOne({
        slug: newslug,
        _id: { $ne: findmenu._id },
      });
      if (duplicate) {
        if (filename) {
          await menuController.deleteImage(filename);
        }
        return res.status(400).json({
          success: false,
          message: "A menu with this title already exists",
        });
      }
      const updatedata = {
        title,
        slug: newslug,
        description,
        price,
        menuCategory,
      };
      if (filename) {
        updatedata.menuImage = filename;
      }

      const updatemenu = await menumodel.findByIdAndUpdate(
        findmenu._id,
        updatedata,
        { new: true }
      );

      if (menuCategory.toString() !== findmenu.menuCategory.toString()) {
        existingCategory.items.pull(findmenu._id);
        await existingCategory.save();
        checkmenuCategory.items.push(updatemenu._id);
        await checkmenuCategory.save();
      }

      if (filename && findmenu.menuImage) {
        await menuController.deleteImage(findmenu.menuImage);
      }
      return res.status(200).json({
        success: true,
        message: "Menu Updated Successfully",
        data: updatemenu,
      });
    } catch (error) {
      if (filename) {
        await menuController.deleteImage(filename);
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again ",
      });
    }
  };
  static deleteMenu = async (req, res) => {
    const { slug } = req.params;

    if (!slug) {
      return res
        .status(400)
        .json({ success: false, message: "Slug is required" });
    }

    try {
      const menu = await menumodel.findOne({ slug });
      if (!menu) {
        return res
          .status(404)
          .json({ success: false, message: "Menu not found" });
      }

      const category = await menucategorymodel.findById(menu.menuCategory);
      if (category) {
        category.items.pull(menu._id);
        await category.save();
      }

      await menumodel.findByIdAndDelete(menu._id);

      if (menu.menuImage) {
        await menuController.deleteImage(menu.menuImage);
      }
      return res.status(200).json({
        success: true,
        message: "Menu deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error, please try again",
      });
    }
  };
}

export default menuController;
