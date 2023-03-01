import mongoose from "mongoose";



export const Connection = async (URL) => {
    
    try{
      await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
      console.log('database connected successfully');
    }catch (error) {
        console.log('Error While Connecting with database',error.message);
    }
}

 export default Connection;