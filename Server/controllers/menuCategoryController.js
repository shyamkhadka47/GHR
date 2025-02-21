import menucategorymodel from "../models/menucategorymodel.js";

class menuCategoryController {
  static addMenuCategory = async (req, res) => {
    const { name } = req.body;

    try {
      if (!name) {
        return res
          .status(400)
          .json({ success: false, message: "Please Add Menu Category Name" });
      }
      const findmenucategory = await menucategorymodel.find({name});
      if (findmenucategory.length > 0) {
        return res
          .status(400)
          .json({ success: false, message: "Category Name Already Exist" });
      }
      const savemenucategory = await menucategorymodel.create({ name });
      if (!savemenucategory) {
        return res.status(400).json({
          success: false,
          message: "Error Creating Menu Category Please Try Again",
        });
      }
      return res
        .status(200)
        .json({ success: true, message: "Menu Category Create SuccessFully" });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error Please Try Again",
      });
    }
  };
  static getAllMenuCategory= async(req, res)=>{
    
    try {
      const findmenucategory= await menucategorymodel.find().sort({createdAt:-1})
      
      if(!findmenucategory){
        return res.status(400).json({success:false, message:"There are No Menu Category Please Add Category"})
      }
      return res.status(200).json({success:true, data:findmenucategory})

    } catch (error) {
      return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
    }
  }
  static getSingleMenuCategory= async(req, res)=>{
    const {id}= req.params
    try {
      if(!id){
        return res.status(400).json({success:false, message:"Please Choose Valid Id"})
      }
      const findmenucategory= await menucategorymodel.findById(id)
      if(!findmenucategory){
        return res.status(400).json({success:false, message:"Menu Category Not Found"})
      }
      return res.status(200).json({success:true, data:findmenucategory})
    } catch (error) {
      return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
    }
  }
  static updateMenuCategory= async(req, res)=>{
 
    const {id}= req.params
    try {
      if(!id){
        return res.status(400).json({success:false, message:"Please Choose Valid Id To Update"})
      }
      const findmenucategory= await menucategorymodel.findByIdAndUpdate(id, {...req.body}, {new:true})
      if(!findmenucategory){
        return res.status(400).json({success:false, message:"No Such Category Available"})
      }
      return res.status(200).json({success:true, message:"Category Updated Successfully"})
      
    } catch (error) {
      return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
    }
  }
  static deleteMenuCategory= async(req, res)=>{
    const {id}= req.params
    try {
      
      if(!id){
        return res.status(400).json({success:false, message:"Please Choose Valid Id To Delete"})
      }
      const deletemenucategory= await menucategorymodel.findByIdAndDelete(id)
      if(!deletemenucategory){
        return res.status(400).json({success:false, message:"Error Deleting Category"})
      }
      return res.status(200).json({success:true, message:"Category Deleted Successfully"})
    } catch (error) {
      return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
    }
  }
}

export default menuCategoryController;
