const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Enter Your Name"],
        minLength : [4, "More than 4 character"]
    },

    email : {
        type : String,
        required : [true, "Enter Your Email"],
        unique :true,
    },

    password : {
        type : String,
        required : [true , "Enter your password"]
    }
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
});

userSchema.methods.createJWTToken = function (){
    return jwt.sign({id : this._id}, process.env.JWT_SECRET,

        {
            expiresIn : process.env.JWT_EXPIRE
        }
    )
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password   )
}
module.exports = mongoose.model("User", userSchema);

