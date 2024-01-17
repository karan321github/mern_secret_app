import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
      username:{
        type: String , 
        required:  true, 
        unique: true,
      },
      email:{
        type: String ,
        required:  true,
        unique: true,
      },
      password:{
        type: String ,
        required:  true,
      },
      profilePicture: {
        type: String,
        default: "https://th.bing.com/th/id/OIP.IS1sxWmGcRLGevbq3yYungHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
      },
} ,  {timestamps: true} );

const User = mongoose.model('User' , UserSchema);
export default User;