import faqmodal from "../models/faqmodel.js"

class faqController{
    static addNewFaq= async(req, res)=>{
        const {question, answer}= req.body
        try {
          if(!question || !answer){
            return res.status(400).json({success:false, message:"All Fields Required"})
          }  
          const savefaq= await faqmodal.create({question,answer})
          if(!savefaq){
            return res.status(400).json({success:false, message:"Error Creating FAQ Please Try Again"})
          }
          return res.status(200).json({success:true, message:"FAQ Created Successfully", data:savefaq})
        } catch (error) {
            return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
        }
    }

    static getAllFaq= async(req,res)=>{
        try {
            const getAllFaqs= await faqmodal.find().sort({createdAt:-1})
            if(!getAllFaqs){
                return res.status(200).json({success:false, message:"No Faq At the Moment"})
            }
            return res.status(200).json({success:true, data:getAllFaqs})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({success:false, message:"SomeThing Went Wrong Please Try Again"})
        }
    }

    static getSingleFaq= async(req, res)=>{
        const {id}= req.params
        try {
          if(!id){
            return res.status(400).json({success:false, message:"Please Choose Valid Id"})
          }  

          const findfaqbyid= await faqmodal.findById({_id:id})
          if(!findfaqbyid){
            return res.status(400).json({success:false, message:"No Such Faq Available"})
          }
          return res.status(200).json({success:true, data:findfaqbyid})
        } catch (error) {
            return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
        }
    }

    static updateFaq= async(req, res)=>{
        const {question,  answer}= req.body
        const {id}=req.params
        try {
            if(!id){
                return res.status(400).json({success:false, message:"Please Choose Valid Id"})
              } 

              const findfaqbyid= await faqmodal.findById({_id:id})
              if(!findfaqbyid){
                return res.status(400).json({success:false, message:"No Such Faq Available"})
              }

              const updatefaq= await faqmodal.findOneAndUpdate({_id:id}, {...req.body})
              if(!updatefaq){
                return res.status(400).json({success:false, message:"Error Updating"})
              }
              return res.status(200).json({success:true, message:"Faq Updated SuccessFully"})
            
        } catch (error) {
           return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"}) 
        }
    }

    static deleteFaq= async(req, res)=>{
        const {id}= req.params
        try {
            if(!id){
                return res.status(400).json({success:false, message:"Id Required to delete"})
            }
            const findfaq= await faqmodal.findOneAndDelete({_id:id})
           if(!findfaq){
            return res.status(400).json({success:false, message:"Error Deleting No Such Faq"})
           }

           return res.status(200).json({success:true, message:"Faq Deleted Successfully"})
        } catch (error) {
            return res.status(500).json({success:false, message:"Internal Server Error Please Try Again"})
        }
    }


}

export default faqController