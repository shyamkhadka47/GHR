import express from "express";
import authController from "../controllers/authController.js";
import protect from "../middleware/authCheck.js";
import siteSettingController from "../controllers/siteSettingController.js";
import { aboutupload, galleryupload, logoupload, serviceupload, sliderupload, testimonialupload } from "../multerStorage/multer-config.js";
import faqController from "../controllers/faqController.js"
import sliderController from "../controllers/sliderController.js";
import userqueryController from "../controllers/userqueryController.js";
import serviceController from "../controllers/serviceController.js";
import testimonialController from "../controllers/testimonialController.js";
import galleryController from "../controllers/galleryController.js";
import aboutController from "../controllers/aboutController.js";
import menuCategoryController from "../controllers/menuCategoryController.js";


const Router = express.Router();

// Authorization
Router.post("/login", authController.userLogin);
Router.post("/register", authController.userRegister);
Router.post("/me", protect, authController.isVerified);

//  Site Settings API
Router.get("/sitesettings", siteSettingController.getSiteSetting);
Router.post("/addsitesettings", protect, logoupload.single("image"),siteSettingController.addSiteSetting);
Router.put("/editsitesettings", protect, logoupload.single("image"),siteSettingController.editSiteSetting);

// FAQ API
Router.post("/addfaq", protect, faqController.addNewFaq);
Router.get("/getfaq", faqController.getAllFaq);
Router.get("/getfaq/:id", protect, faqController.getSingleFaq);
Router.put("/updatefaq/:id", protect,faqController.updateFaq);
Router.delete("/deletefaq/:id",protect, faqController.deleteFaq);


// SLIDER API
Router.post("/addnewslider", protect, sliderupload.single("image"), sliderController.addSlider)
Router.get("/getallslider",  sliderController.getSlider)
Router.get("/getsingleslider/:id", protect, sliderController.singleSlider)
Router.delete("/deleteslider/:id",protect, sliderController.deleteSlider);
Router.put("/updateslider/:id", protect, sliderupload.single("image"), sliderController.updateSlider)

// USER QUERY API
Router.post("/adduserquery", userqueryController.addquery)
Router.get("/getalluserquery", protect, userqueryController.getAllUserQuery)
Router.get("/getsingleuserquery/:id", protect, userqueryController.getSingleUserQuery)
Router.delete("/deleteuserquery/:id", protect, userqueryController.deleteUserQuery)

// OUR SERVICES API

Router.post("/addnewservices", protect, serviceupload.single("image"), serviceController.addNewServices)
Router.get("/getallservices", serviceController.getAllServices)
Router.get("/getsingleservice/:id", protect, serviceController.getSingleService)
Router.put("/updateservice/:id", protect, serviceupload.single("image"), serviceController.updateService)
Router.delete("/deleteservice/:id", protect, serviceController.deleteService)

// CUSTOMERS TESTIMONIAL API
Router.post("/addtestimonials", protect, testimonialupload.single("image"),testimonialController.addTestimonial)
Router.get("/getalltestimonial", protect, testimonialController.getAllTestimonial)
Router.get("/getsingletestimonial/:id", protect, testimonialController.getSingleTestimonial)
Router.put("/updatetestimonial/:id", protect, testimonialupload.single("image"), testimonialController.updateTestimonial)
Router.delete("/deletetestimonial/:id", protect, testimonialController.deleteTestimonial)

// GALLERY API
Router.post("/addgallery", protect,galleryupload.single("image"),galleryController.addNewGallery )
Router.get("/getallgallery", galleryController.getAllGallery )
Router.get("/getsinglegallery/:id", protect, galleryController.getSingleGallery)
Router.put("/updategallery/:id", protect, galleryupload.single("image"),galleryController.updateGallery)
Router.delete("/deletegallery/:id", protect, galleryController.deleteGallery)

// ABOUT US API
Router.post("/addaboutus", protect, aboutupload.single("image"), aboutController.addAboutUs )
Router.get("/getaboutus", aboutController.getAboutUs)
Router.put("/updateaboutus", protect, aboutupload.single("image"), aboutController.updateAboutUs)

// MENU CATEGORY API
Router.post("/addmenucategory",protect,menuCategoryController.addMenuCategory)
Router.get("/getallmenucategory", menuCategoryController.getAllMenuCategory)
Router.get("/getsinglemenucategory/:id", menuCategoryController.getSingleMenuCategory)
Router.put("/updatemenucategory/:id", protect, menuCategoryController.updateMenuCategory)
Router.delete("/deletemenucategory/:id", protect, menuCategoryController.deleteMenuCategory)



export default Router;
