import sitesettingmodal from "../models/sitesettingmodel.js";
import fs from "fs";

class siteSettingController {
  static getSiteSetting = async (req, res) => {
    try {
      const findSiteSetting = await sitesettingmodal.find();
      if (!findSiteSetting) {
        return res
          .status(400)
          .json({ success: false, message: "No Site Setting Available" });
      }

      res.status(200).json({ success: true, data: findSiteSetting });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Something Went Wrong" });
    }
  };
  static addSiteSetting = async (req, res) => {
    const {
      businessname,
      phonenumber,
      email,
      fblink,
      twitterlink,
      linkedlink,
      youtubelink,
      shortdescriptionaboutbusiness,
    } = req.body;
    const { filename } = req.file;

    if (
      (!businessname ||
        !phonenumber ||
        !email ||
        !fblink ||
        !twitterlink ||
        !linkedlink ||
        !youtubelink ||
        !shortdescriptionaboutbusiness) &&
      filename
    ) {
      if (filename) {
        fs.unlink(`public/uploads/${filename}`, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
      return res
        .status(400)
        .json({ success: false, message: "All Field Required" });
    }
    const findSiteSetting = await sitesettingmodal.find();
    if (findSiteSetting.length > 0) {
      if (filename) {
        fs.unlink(`public/uploads/${filename}`, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
      return res
        .status(400)
        .json({ success: false, message: "Site Setting Already Exist" });
    }

    const createsitesetting = await sitesettingmodal.create({
      businessname,
      phonenumber,
      email,
      fblink,
      twitterlink,
      linkedlink,
      youtubelink,
      shortdescriptionaboutbusiness,
      businesslogo: filename,
    });
    if (!createsitesetting) {
      return res
        .status(400)
        .json({ success: false, message: "Site Setting Not Created" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Site Setting Created Successfully" });
  };

  static editSiteSetting = async (req, res) => {
    const {
      businessname,
      businesslogo,
      phonenumber,
      email,
      fblink,
      twitterlink,
      linkedlink,
      youtubelink,
      shortdescriptionaboutbusiness,
    } = req.body;
    const { filename } = req.file;
    try {
      const findSiteSetting = await sitesettingmodal.findOne();
      if (filename) {
        fs.unlink(`public/uploads/${findSiteSetting.businesslogo}`, (err) => {
          if (err) {
            return res.status(400).json("Error Deleting Old File");
          }
        });
        findSiteSetting.businesslogo = filename;
      }

      findSiteSetting.businessname = businessname;
      findSiteSetting.phonenumber = phonenumber;
      findSiteSetting.email = email;
      findSiteSetting.fblink = fblink;
      findSiteSetting.twitterlink = twitterlink;
      findSiteSetting.linkedlink = linkedlink;
      findSiteSetting.youtubelink = youtubelink;
      findSiteSetting.shortdescriptionaboutbusiness =
        shortdescriptionaboutbusiness;

      const savingsitesettings = await findSiteSetting.save();
      if (!savingsitesettings) {
        return res
          .status(400)
          .json({ success: false, message: "Cannot Update Site Setting" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Site Setting Updated SuccessFully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  };
}
export default siteSettingController;
