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

    try {
      if (
        !businessname ||
        !phonenumber ||
        !email ||
        !fblink ||
        !twitterlink ||
        !linkedlink ||
        !youtubelink ||
        !shortdescriptionaboutbusiness
      ) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/uploads/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "All Field Required" });
      }
      const findSiteSetting = await sitesettingmodal.find();
      if (findSiteSetting.length > 0) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/uploads/${filename}`);
          } catch (error) {
            console.log(error);
          }
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
        if (filename) {
          try {
            await fs.promises.unlink(`public/uploads/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }
        return res
          .status(400)
          .json({ success: false, message: "Site Setting Not Created" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Site Setting Created Successfully" });
    } catch (error) {
      if (filename) {
        try {
          await fs.promises.unlink(`public/uploads/${filename}`);
        } catch (error) {
          console.log(error);
        }
      }
      return res
        .status(500)
        .json({
          success: false,
          message: "Internal Server Error Please Try Again",
        });
    }
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
      if (!findSiteSetting) {
        try {
          await fs.promises.unlink(`public/uploads/${filename}`);
        } catch (error) {
          console.log(error);
        }
        return res
          .status(400)
          .json({ success: false, message: "No Site Setting Found" });
      }

      const savesitesetting = await sitesettingmodal.findOneAndUpdate({
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

      if (!savesitesetting) {
        if (filename) {
          try {
            await fs.promises.unlink(`public/uploads/${filename}`);
          } catch (error) {
            console.log(error);
          }
        }

        return res
          .status(400)
          .json({ success: false, message: "Cannot Update Site Setting" });
      }

      if (filename) {
        fs.unlink(`public/uploads/${findSiteSetting.businesslogo}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      return res
        .status(200)
        .json({ success: true, message: "Site Setting Updated SuccessFully" });
    } catch (error) {
      if (filename) {
        try {
          await fs.promises.unlink(`public/uploads/${filename}`);
        } catch (error) {
          console.log(error.message);
        }
      }
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
}
export default siteSettingController;
