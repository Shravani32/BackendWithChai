const asyncHandler=(requstHandler)=>{
   (req,res,next)=>{
      Promise.resolve(requstHandler(req,res,next)).catch((error)=>next(error));
   }
}

module.exports={asyncHandler}


// const asyncHandler=(fn)=>async (req,res,next)=>{
//   try{
//       await fn(req,res,next);
//   }

//   catch(err){
//     res.status(err.code||500).json({
//         success:false,
//         message:err.message
//     })
//   }
// }